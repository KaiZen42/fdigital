const Test = React.memo((props) => {
	const [testType, setTestType] = React.useState(isLocalSession ? 
		localTestType : getScoLocation(ScormProcessGetValue("cmi.location"), 1));
	if(getScoLocation(locationStatus, "test1") == "test1")
		return <Test1 setTestSection={props.setTestSection} setEmailCount={props.setEmailCount} setNotify={props.setNotify}/>
	else
		return <Test2 setTestSection={props.setTestSection} setEmailCount={props.setEmailCount} setNotify={props.setNotify}/>



function Test1(props) {
	const Link = ReactRouterDOM.NavLink;
	let name = ScormProcessGetValue("cmi.learner_name");
	console.log("name=", name);
	if(!name)
		name = "Valariano, Beniamino";
	name = name.split(", ")[0];
	name = name.toUpperCase();
	let link = users.find(data => data["Last Name"] === name);
	console.log("link=",link);
	function handleEndNoTest(e, props){
			AfterTest(props);
		
	}
	if(!users.find(data => data["Last Name"] === name))
	{
		return(
			<Grid container direction="column" sx={{color: 'white'}}>
				<Divider>
					Test non disponibile
				</Divider>
				<Divider>
					{/* <EndTest setTestSection={props.setTestSection} setEmailCount={props.setEmailCount} setNotify={props.setNotify} isEndButton={testFinish} setX={props.setX} deactivate={props.deactivate}></EndTest> */}
					<Link onClick={(e) => handleEndNoTest(e, props)} exact to={`${locPath}`} className="nav-link"><i className="bi bi-house-fill"></i>Back to Home</Link>
				</Divider>
			</Grid>
		);
	}
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
					<iframe style={{ height: "66vh", width: "100%", backgroundColor: "#003a7000" }} frameBorder="0" src={link.Link}></iframe>
					<EndTest setTestSection={props.setTestSection} setEmailCount={props.setEmailCount} setNotify={props.setNotify} isEndButton={isEndButton}/>
				</Box>
			</ThemeProvider>
		</>
	)
}

function EndTest(props) {
	const Link = ReactRouterDOM.NavLink;
	const handleEnd = () => {
		if(getScoLocation(locationStatus, "test1"))
		{
			AfterTest(props);
		}
		else
			AfterSecondTest(props);
	}

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
	const Link = ReactRouterDOM.NavLink;
	let name = ScormProcessGetValue("cmi.learner_name");
	console.log("name=", name);
	if(!name)
		name = "Valariano, Beniamino";
	name = name.split(", ")[0];
	name = name.toUpperCase();
	// if(!name) 
	// 	name = "VALARIANO";
	let link = users.find(data => data["Last Name"] === name);

	
	function handleEndNoTest(e, props){
			AfterSecondTest(props);
	}
	if(!users.find(data => data["Last Name"] === name))
	{
		return(
			<Grid container direction="column" sx={{color: 'white'}}>
				<Divider>
					Test non disponibile
				</Divider>
				<Divider>
					{/* <EndTest setTestSection={props.setTestSection} setEmailCount={props.setEmailCount} setNotify={props.setNotify} isEndButton={testFinish} setX={props.setX} deactivate={props.deactivate}></EndTest> */}
					<Link onClick={(e) => handleEndNoTest(e, props)} exact to={`${locPath}`} className="nav-link"><i className="bi bi-house-fill"></i>Back to Home</Link>
				</Divider>
			</Grid>
		);
	}
	console.log("link=",link);
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
					<iframe style={{ height: "66vh", width: "100%", backgroundColor: "#003a7000" }} frameBorder="0" src={link.Link2}></iframe>
					<EndTest setTestSection={props.setTestSection} setEmailCount={props.setEmailCount} setNotify={props.setNotify} isEndButton={isEndButton} testType={props.testType}/>
				</Box>
			</ThemeProvider>
		</>
	)
}
})