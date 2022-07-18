let numOfWeek = 1;
let company = "L'Mane"
let videoBoss = "media/Weeks/Week2/Boss/boss.mp4"
let type = 0;
let whichVideo;

function InitialState(props){
    if(props.notify != "rubrica")
    {
        props.setNotify("rubrica");
        EmailText.at(0).display = false;
        phoneBook.at(1).real = true;
        type = 0;
    }
}

function FirstStep(props){
    if(props.notify != "rubrica" && props.notify != "inbox")
    {
        props.setNotify("rubrica")
        phoneBook.at(1).real = true;
        type = 1;
    }
}

function SecondStep(props){
    if(props.notify != "rubrica")
    {
        props.setNotify("rubrica")
        phoneBook.at(1).real = true;
        type = 2;
    }
}

function ThirdStep(props){

    if(props.notify != "test")
    {
        EmailText.at(whichVideo).display = true;
        props.setNotify("email")
        props.setEmailCount(emailLen());
    }
}

function FinalScalesVideo(props){
    props.setX("rubric");
    props.setNotify("home");
    phoneBook.at(1).real = false
    if (isLocalSession) lacalCompletionStatus = "not attempted";
    else ScormProcessSetValue("cmi.completion_status", "not attempted");
    // indice = 1;
    main.style.boxShadow = "";
    main.style.transition = ""
    main.style.borderRadius = "";
    props.deactivate.current.style.pointerEvents = '';
    props.deactivate.current.style.color = '';
    ScormProcessSetValue("cmi.suspend_data", 0);
}
function FinalScalesVideo1(props){
    props.setX("rubric");
    props.setNotify("home");
    phoneBook.at(1).real = false
    if (isLocalSession) lacalCompletionStatus = "incomplete";
    else ScormProcessSetValue("cmi.completion_status", "incomplete");
    // indice = 1;
    main.style.boxShadow = "";
    main.style.transition = ""
    main.style.borderRadius = "";
    props.deactivate.current.style.pointerEvents = '';
    props.deactivate.current.style.color = '';
    ScormProcessSetValue("cmi.suspend_data", 0);
}
function FinalScalesVideo2(props){
    if (isLocalSession) lacalCompletionStatus = "completed";
    else ScormProcessSetValue("cmi.completion_status", "completed");
    // indice = 1;
    main.style.boxShadow = "";
    main.style.transition = ""
    main.style.borderRadius = "";
    props.deactivate.current.style.pointerEvents = '';
    props.deactivate.current.style.color = '';
    ScormProcessSetValue("cmi.suspend_data", 0);
    phoneBook.at(1).real = false
    props.setX("rubric");
    props.setNotify("home");

}


function AfterVideoFinal(e){
    if(isLocalSession){
        lacalCompletionStatus = "completed";
        localSuccessStatus = "passed";
      }
      else{
        ScormProcessSetValue("cmi.completion_status", "completed");
        ScormProcessSetValue("cmi.success_status", "passed");
      }
}

function Event1(props, i){
    if(i == 0)
    {
       props.setNotify("home");
	   if(isLocalSession){
		   lacalCompletionStatus = "incomplete";
	   }
	   else{
		   ScormProcessSetValue("cmi.completion_status", "incomplete")};
      //  indice = 2;
    }
}
function Event2(props){

}

function FinalChange(props){

    console.log("FinalChange")
    
}