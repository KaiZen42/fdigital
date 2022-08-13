const Begin = React.memo((props) => {

	  const [x, setX] = React.useState("rubric");
	  const [who, setWho] = React.useState(0);

		//let name = ScormProcessGetValue("cmi.learner_name");
	  
	  const main = document.getElementById('main');
	if(x == "scales" || x == "video" || x == "branching")
	{
	  	main.style.backgroundColor = "#12293e";
		main.style.borderRadius = "3%";
	}
	else{
		main.style.backgroundColor = "";
		main.style.borderRadius = "";
	}
	  
	  const ACTIVE_STATES = {
		  rubric: <Rubric setX={setX} setWho={setWho}/>,
		  fake: <FakeCall setX={setX} who={who}/>,
		  realInterview: <RealCall who={who} x={x} setX={setX} deactivate={props.deactivate}/>,
		  realVideo: <RealCall who={who} x={x} setX={setX} deactivate={props.deactivate}/>,
		  realScales: <RealCall who={who} x={x} setX={setX} deactivate={props.deactivate}/>,
		  branching: <Branching x={x} setX={setX} setNotify={props.setNotify} setEmailCount={props.setEmailCount} setTestSection={props.setTestSection} deactivate={props.deactivate} openLibrary={props.openLibrary} setOpenLibrary={props.setOpenLibrary}/>,
		  scales: <VideoScales x={x} setX={setX} setNotify={props.setNotify} setDeactivate={props.setDeactivate} deactivate={props.deactivate} setEmailCount={props.setEmailCount} setSerie={props.setSerie}/>,
		  video: <VideoSimple x={x} setX={setX} setNotify={props.setNotify} setEmailCount={props.setEmailCount} deactivate={props.deactivate}  openLibrary={props.openLibrary} setOpenLibrary={props.setOpenLibrary}/>
		};
		
	function ActiveState({ state }) {
		return <>{ACTIVE_STATES[state]}</>;
		}
	  
		return(
			<>
		  	<ActiveState state ={x}/> 
		  	</>
	  )
	})
	