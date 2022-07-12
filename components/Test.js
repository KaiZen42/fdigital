const Test = (props) => {

	// const scormState = ScormProcessGetValue("cmi.completion_status");

	// if(scormState == 3)
	return <Test1 setTestSection={props.setTestSection} setEmailCount={props.setEmailCount} setNotify={props.setNotify} />
	// if(indice == 6)
	//   return <Test2 setTestSection={props.setTestSection} setEmailCount={props.setEmailCount} setNotify={props.setNotify}/>
	// else
	// {
	//   props.setTestSection(false)
	//   return <p>Sezione non accessibile</p>
	// }

}


function Test1(props) {

	let name = "vala";
	let link = users.find(data => data["Last Name"] === name);
	const [isEndButton, setIsEndButton] = React.useState(null);

	window.addEventListener("message", function (e) {
		//   if (e.origin !== "http://localhost:8080") return;
		if (e.data !== "qualtrix_survey") return;
		setIsEndButton(isEndButton || isEndButton == null ? false : true);
	}, false);

	return (
		<>
			<ThemeProvider theme={theme}>
				<Box id="box" sx={{ flexGrow: 1, color: 'white', width: 'auto' }}>
					<Divider>
					</Divider>
					{
						<iframe style={{ height: "66vh", width: "100%", backgroundColor: "#003a7000" }} frameBorder="0" src={link.Link}></iframe>
					}
					{/* <Divider> */}
						<EndTest setTestSection={props.setTestSection} setEmailCount={props.setEmailCount} setNotify={props.setNotify} isEndButton={isEndButton} />
					{/* </Divider> */}
				</Box>
			</ThemeProvider>
		</>
	)



}

function EndTest(props) {
	const Link = ReactRouterDOM.NavLink;
	const handleEnd = () => {
		AfterTest(props);
	}
	//   if(isLocalSession){
	//     lacalCompletionStatus = "completed";
	//     localSuccessStatus = "passed";
	//   }
	//   else{
	//     ScormProcessSetValue("cmi.completion_status", "completed");
	//     ScormProcessSetValue("cmi.success_status", "passed");
	//   }
	//   props.setTestSection(false); 
	//   // props.setEmailCount(emailLen()); fare tasto exit
	//   props.setNotify("");
	// }
	//   ScormProcessSetValue("cmi.completion_status", "completed");

	//ScormProcessSetValue("")

	return (
		<>
			{props.isEndButton &&
				<Divider>
					<Link exact onClick={handleEnd} to={`${locPath}`} className="nav-link"><i className="bi bi-house-fill"></i>Torna alla Home</Link>
				</Divider>}
		</>
	)
}

function Test2(props) {
	return (
		<p>test2</p>
	)
}