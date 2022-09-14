let numOfWeek = 10;
let company = "Shampora"
let videoBoss = "media/Weeks/Week10/Boss/boss.mp4"

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
        phoneBook.at(3).real = true;
        phoneBook.at(1).real = false;
    }
}

function ThirdStep(props){
    if(props.notify != "test")
    {
        props.setOpenLibrary(false);
        props.setTestSection("true");
        props.setNotify("test")
        phoneBook.at(3).real = false;
    }
}

function FinalScalesVideo(props){
    props.setX("rubric");
    props.setNotify("home");
    phoneBook.at(1).real = false
        if (isLocalSession) lacalCompletionStatus = setScoLocation(locationStatus, "step0");
    else ScormProcessSetValue("cmi.location", setScoLocation(ScormProcessGetValue("cmi.location"), "step0"));
    // indice = 1;
    main.style.boxShadow = "";
    main.style.transition = ""
    main.style.borderRadius = "";
    props.deactivate.current.style.pointerEvents = '';
    props.deactivate.current.style.color = '';
    ScormProcessSetValue("cmi.suspend_data", 0);
}
function FinalSimpleVideo(props){
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
        if (isLocalSession) lacalCompletionStatus = setScoLocation(locationStatus, "step2");
    else ScormProcessSetValue("cmi.location", setScoLocation(ScormProcessGetValue("cmi.location"), "step2"));
    EmailText.at(0).display = true;
    phoneBook.at(3).real = false; 
    ScormProcessSetValue("cmi.suspend_data", 0);
}

function AfterTest(props){
    if (isLocalSession) lacalCompletionStatus = setScoLocation(locationStatus, "step3");
    else{
        ScormProcessSetValue("cmi.location", setScoLocation(ScormProcessGetValue("cmi.location"), "step3"));
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
        if (isLocalSession) lacalCompletionStatus = setScoLocation(locationStatus, "step1");
    else ScormProcessSetValue("cmi.location", setScoLocation(ScormProcessGetValue("cmi.location"), "step1"));
      //  indice = 2;
    }
}
function Event2(props){

}

function FinalChange(props){
    
}