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
        props.setNotify("inbox")
        props.setEmailCount(emailLen());
    }
}

function FinalScalesVideo(props){
    props.setX("rubric");
    props.setNotify("home");
    phoneBook.at(1).real = false
    if (isLocalSession) lacalCompletionStatus = setScoLocation(locationStatus, "step0");
    else ScormProcessSetValue("cmi.location", setScoLocation(ScormProcessGetValue("cmi.location"), "step0"));
    // indice = 1;
    props.deactivate.current.style.pointerEvents = '';
    props.deactivate.current.style.color = '';
    ScormProcessSetValue("cmi.suspend_data", 0);
}
function FinalScalesVideo1(props){
    props.setX("rubric");
    props.setNotify("home");
    phoneBook.at(1).real = false
    if (isLocalSession) lacalCompletionStatus = setScoLocation(locationStatus, "step1");
    else ScormProcessSetValue("cmi.location", setScoLocation(ScormProcessGetValue("cmi.location"), "step1"));
    // indice = 1;
    main.style.boxShadow = "";
    main.style.transition = ""
    main.style.borderRadius = "";
    props.deactivate.current.style.pointerEvents = '';
    props.deactivate.current.style.color = '';
    ScormProcessSetValue("cmi.suspend_data", 0);
}
function FinalScalesVideo2(props){
    if (isLocalSession) lacalCompletionStatus = setScoLocation(locationStatus, "step2");
    else ScormProcessSetValue("cmi.location", setScoLocation(ScormProcessGetValue("cmi.location"), "step2"));
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
    console.log("VIDEOFINAL")
    if (isLocalSession) lacalCompletionStatus = setScoLocation(locationStatus, "step3");
    else{
        ScormProcessSetValue("cmi.location", setScoLocation(ScormProcessGetValue("cmi.location"), "step3"));
        ScormProcessSetValue("cmi.completion_status", "completed");
        ScormProcessSetValue("cmi.success_status", "passed");
      }
}

function Finish(props){
    console.log("VIDEOFINISH")
    if (isLocalSession) lacalCompletionStatus = setScoLocation(locationStatus, "step3");
    else{
        ScormProcessSetValue("cmi.location", setScoLocation(ScormProcessGetValue("cmi.location"), "step3"));
        ScormProcessSetValue("cmi.completion_status", "completed");
        ScormProcessSetValue("cmi.success_status", "passed");
      }
      props.setTestSection(false);
      props.setNotify("");
    }
function AfterTest(props){
    FinalScalesVideo(props);
}

function FinalChange(props){

    console.log("FinalChange")
    
}