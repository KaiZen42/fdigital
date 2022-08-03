function checkIfImageExists(url, callback) {
  const img = new Image();
  img.src = url;
  
  if (img.complete) {
    callback(true);
  } else {
    img.onload = () => {
      callback(true);
    };
    
    img.onerror = () => {
      callback(false);
    };
  }
}

function getScoLocation(location, str){

  let len = str.length ? str.length : 0;
  let value = location.slice(location.search(str), location.search(str) + len)
  console.log(len)
  if(value == "" || location.search(str) == -1)
    return -1;
  return value;
}

function setScoLocation(location, str) //step
{  
  console.log("LOCATION INIZIALE", location, "E STR", str)
  let index;
  let tmp;
  let stato = str.search("step") != -1 ? stateStep : stateTest ;

  if(stato == stateStep)
    tmp = location.slice(5, 10);
  else
    tmp = location.slice(0, 5);
  console.log("VALORE INIZIALE",tmp, "compare", tmp.localeCompare(str))
  if(tmp.localeCompare(str) == 0)
  {
    index = stato.indexOf(str);
    location = location.replace(str, stato.at(index + 1));
  }

  console.log("LOCATION FINALE", location)
  return location;
}

function emailLen(){
  let k = 0;
  let count = 0;
  let num = ScormProcessGetValue("cmi.interactions._count");
  let emailId = 0;
	for(let k = 0; k < num; k++){
		emailId = parseInt(ScormProcessGetValue("cmi.interactions." + k + ".id"));
		if (ScormProcessGetValue("cmi.interactions." + k + ".learner_response") == "true"){
			EmailText.at(emailId).open = true;
		}
		if(!EmailText.at(emailId).display)
			EmailText.at(emailId).display = true;
	}
  while(k < EmailText.length)
  {
    if(EmailText.at(k).display == true && EmailText.at(k).open == false)
      count++;
    k++
  }
  return count;
}

function closeToggle(){
	const main = document.getElementById('main');
	main.style.height = "50vw";
	const side = document.getElementById('sidebar');
	if(side.getAttribute("class") != "active" && window.screen.width.valueOf() > 390)
	  side.setAttribute("class", "active")
  else if(side.getAttribute("class") == "active" && window.screen.width.valueOf() <= 390)
      side.removeAttribute("class");
  }



function doExit(){
  
    //note use of short-circuit AND. If the user reached the end, don't prompt.
    //just exit normally and submit the results.
    ScormProcessSetValue("cmi.exit", "");
    ScormProcessSetValue("adl.nav.request", "exitAll");
    
    doUnload();
    
  }
  
  function doUnload(){
    
    //record the session time
    var endTimeStamp = new Date();
    var totalMilliseconds = (endTimeStamp.getTime() - startTimeStamp.getTime());
    var scormTime = ConvertMilliSecondsIntoSCORM2004Time(totalMilliseconds);
    
    ScormProcessSetValue("cmi.session_time", scormTime);
    
    //always default to saving the runtime data in this example
    ScormProcessSetValue("cmi.exit", "suspend");
    
    ScormProcessTerminate();
  }
  
  function ConvertMilliSecondsIntoSCORM2004Time(intTotalMilliseconds){
      
    var ScormTime = "";
    
    var HundredthsOfASecond;	//decrementing counter - work at the hundreths of a second level because that is all the precision that is required
    
    var Seconds;	// 100 hundreths of a seconds
    var Minutes;	// 60 seconds
    var Hours;		// 60 minutes
    var Days;		// 24 hours
    var Months;		// assumed to be an "average" month (figures a leap year every 4 years) = ((365*4) + 1) / 48 days - 30.4375 days per month
    var Years;		// assumed to be 12 "average" months
    
    var HUNDREDTHS_PER_SECOND = 100;
    var HUNDREDTHS_PER_MINUTE = HUNDREDTHS_PER_SECOND * 60;
    var HUNDREDTHS_PER_HOUR   = HUNDREDTHS_PER_MINUTE * 60;
    var HUNDREDTHS_PER_DAY    = HUNDREDTHS_PER_HOUR * 24;
    var HUNDREDTHS_PER_MONTH  = HUNDREDTHS_PER_DAY * (((365 * 4) + 1) / 48);
    var HUNDREDTHS_PER_YEAR   = HUNDREDTHS_PER_MONTH * 12;
    
    HundredthsOfASecond = Math.floor(intTotalMilliseconds / 10);
    
    Years = Math.floor(HundredthsOfASecond / HUNDREDTHS_PER_YEAR);
    HundredthsOfASecond -= (Years * HUNDREDTHS_PER_YEAR);
    
    Months = Math.floor(HundredthsOfASecond / HUNDREDTHS_PER_MONTH);
    HundredthsOfASecond -= (Months * HUNDREDTHS_PER_MONTH);
    
    Days = Math.floor(HundredthsOfASecond / HUNDREDTHS_PER_DAY);
    HundredthsOfASecond -= (Days * HUNDREDTHS_PER_DAY);
    
    Hours = Math.floor(HundredthsOfASecond / HUNDREDTHS_PER_HOUR);
    HundredthsOfASecond -= (Hours * HUNDREDTHS_PER_HOUR);
    
    Minutes = Math.floor(HundredthsOfASecond / HUNDREDTHS_PER_MINUTE);
    HundredthsOfASecond -= (Minutes * HUNDREDTHS_PER_MINUTE);
    
    Seconds = Math.floor(HundredthsOfASecond / HUNDREDTHS_PER_SECOND);
    HundredthsOfASecond -= (Seconds * HUNDREDTHS_PER_SECOND);
    
    if (Years > 0) {
      ScormTime += Years + "Y";
    }
    if (Months > 0){
      ScormTime += Months + "M";
    }
    if (Days > 0){
      ScormTime += Days + "D";
    }
    
    //check to see if we have any time before adding the "T"
    if ((HundredthsOfASecond + Seconds + Minutes + Hours) > 0 ){
      
      ScormTime += "T";
      
      if (Hours > 0){
        ScormTime += Hours + "H";
      }
      
      if (Minutes > 0){
        ScormTime += Minutes + "M";
      }
      
      if ((HundredthsOfASecond + Seconds) > 0){
        ScormTime += Seconds;
        
        if (HundredthsOfASecond > 0){
          ScormTime += "." + HundredthsOfASecond;
        }
        
        ScormTime += "S";
      }
      
    }
    
    if (ScormTime == ""){
      ScormTime = "0S";
    }
    
    ScormTime = "P" + ScormTime;
    
    return ScormTime;
  }

  function stringToColor(string) {
	let hash = 0;
	let i;
  
	/* eslint-disable no-bitwise */
	for (i = 0; i < string.length; i += 1) {
	  hash = string.charCodeAt(i) + ((hash << 5) - hash);
	}
  
	let color = '#';
  
	for (i = 0; i < 3; i += 1) {
	  const value = (hash >> (i * 8)) & 0xff;
	  color += `00${value.toString(16)}`.slice(-2);
	}
	/* eslint-enable no-bitwise */
  
	return color;
  }
  
  function stringAvatar(name, isSpase) {
	  if(isSpase)
	  {
		return {
		sx: {
			bgcolor: stringToColor(name),
		},
		children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
		};
	}
	else
	{
		return {
		sx: {
			bgcolor: stringToColor(name),
		},
		children: `${name.at(0)}`,
		};
	}
  }