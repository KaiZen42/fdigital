let numOfWeek = 4;
let company = "Gamindo"
let videoBoss = "media/Weeks/Week4/Boss/boss.mp4"

function InitialState(props){
    if(props.notify != "rubrica")
    {
        EmailText.at(0).display = false;
        phoneBook.at(1).real = true;
        props.setNotify("rubrica");
    }
}

function FirstStep(props){
    if(props.notify != "rubrica" && props.notify != "inbox")
    {
        props.setNotify("rubrica")
        phoneBook.at(0).real = true
        phoneBook.at(1).real = false;
    }
}

function SecondStep(props){
    if(props.notify != "library")
    {
        props.setOpenLibrary(true);
        props.setNotify("library")
        phoneBook.at(4).real = true;
        phoneBook.at(1).real = false;
    }
}

function ThirdStep(props){
    if(props.notify != "test")
    {
        props.setOpenLibrary(false);
        props.setTestSection("true");
        props.setNotify("test")
        phoneBook.at(4).real = false;
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
function FinalSimpleVideo(props){
    console.log("ciao")
    props.setX("rubric");
    props.setNotify("inbox");
    EmailText.at(0).display = true;
    phoneBook.at(0).real = false;
    props.setEmailCount(emailLen()); 
    props.deactivate.current.style.pointerEvents = '';
    props.deactivate.current.style.color = '';
}
function FinalBranchingVideo(props){
    props.deactivate.current.style.pointerEvents = "";
    props.deactivate.current.style.color = "";
    props.setX("rubric");
    props.setNotify("home");
    if (isLocalSession) lacalCompletionStatus = "completed";
    else ScormProcessSetValue("cmi.completion_status", "completed");
    EmailText.at(0).display = true;
    phoneBook.at(4).real = false;
    ScormProcessSetValue("cmi.suspend_data", 0);
}

function AfterTest(props){
    if(isLocalSession){
        lacalCompletionStatus = "completed";
        localSuccessStatus = "passed";
      }
      else{
        ScormProcessSetValue("cmi.completion_status", "completed");
        ScormProcessSetValue("cmi.success_status", "passed");
      }
      props.setTestSection(false);
      props.setNotify("");
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