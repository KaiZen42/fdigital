let numOfWeek = 5;
let company = "Gamindo"
let videoBoss = "media/Weeks/Week4/Boss/boss.mp4"

function InitialState(props){
    if(props.notify != "serie")
    {
        props.setNotify("serie");
        props.setSerie(true);
    }
}

function FirstStep(props){
    if(props.notify != "test")
    {
        props.setSerie(false);
        props.setNotify("test")
        props.setTestSection("true");
    }
}

function SecondStep(props){
    if(props.notify != "library")
    {
        props.setOpenLibrary(true);
        props.setNotify("library");
    }
}

function ThirdStep(props){
    if(props.notify != "test")
    {
        props.setTestSection("true");
        props.setNotify("test")
    }
}

function FinalEpisode(props){
    props.setNotify("home");
        if (isLocalSession) lacalCompletionStatus = setScoLocation(locationStatus, "step0");
    else ScormProcessSetValue("cmi.location", setScoLocation(ScormProcessGetValue("cmi.location"), "step0"));
    // indice = 1;
    main.style.boxShadow = "";
    main.style.transition = ""
    main.style.borderRadius = "";
    props.deactivate.current.style.pointerEvents = '';
    props.deactivate.current.style.color = '';
}

function afterLibrary(props){
    props.setNotify("home");
        if (isLocalSession) lacalCompletionStatus = setScoLocation(locationStatus, "step2");
    else ScormProcessSetValue("cmi.location", setScoLocation(ScormProcessGetValue("cmi.location"), "step2"));
}
function AfterTest(props){
    
    if (isLocalSession) lacalCompletionStatus = "incomplete";
    else ScormProcessSetValue("cmi.completion_status", "incomplete");
      props.setTestSection(false);
      props.setNotify("");
}

function AfterSecondTest(props){
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