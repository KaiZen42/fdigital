const Test = (props) => {
	const [testType, setTestType] = React.useState(isLocalSession ? 
		localTestType : getScoLocation(ScormProcessGetValue("cmi.location"), 1));
	if(!testType)
		return <Test1 setTestSection={props.setTestSection} setEmailCount={props.setEmailCount} setNotify={props.setNotify}/>
	else
		return <Test2 setTestSection={props.setTestSection} setEmailCount={props.setEmailCount} setNotify={props.setNotify}/>



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
					{<iframe style={{ height: "66vh", width: "100%", backgroundColor: "#003a7000" }} frameBorder="0" src={link.Link}></iframe>}
					<EndTest setTestSection={props.setTestSection} setEmailCount={props.setEmailCount} setNotify={props.setNotify} isEndButton={isEndButton}/>
				</Box>
			</ThemeProvider>
		</>
	)
}

function EndTest(props) {
	const Link = ReactRouterDOM.NavLink;
	const handleEnd = () => {
		console.log("TESTTIP", testType)
		if(getScoLocation(globale, "test1"))
		{
			console.log("sono entratoooooo");
			if(isLocalSession)
			{
				globale = setScoLocation(globale, "test1");
				// localTestType = 1;
			}
			else
				ScormProcessSetValue("cmi.location", setScoLocation(ScormProcessGetValue("cmi.location"), "test1"));
			AfterTest(props);
		}
		else
			AfterSecondTest(props);
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
			{numOfWeek != 1 && props.isEndButton &&
				<Divider>
					<Link exact onClick={handleEnd} to={`${locPath}`} className="nav-link"><i className="bi bi-house-fill"></i>Back to Home</Link>
				</Divider>}
			{numOfWeek == 1 && props.isEndButton &&
				<ThemeProvider theme={theme}>
					<Grid container direction="row" justifyContent="center" textAlign="center" alignItems="flex-end">
					<IconButton sx={{border: 3}} size="large" type="button" variant="outlined" color="error" onClick={() => handleEnd(props)}><i className="bi bi-telephone-fill"></i></IconButton>
					</Grid>
				</ThemeProvider>}
		</>
	)
}

function Test2(props) {
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
						<EndTest setTestSection={props.setTestSection} setEmailCount={props.setEmailCount} setNotify={props.setNotify} isEndButton={isEndButton} testType={props.testType}/>
					{/* </Divider> */}
				</Box>
			</ThemeProvider>
		</>
	)
}
}