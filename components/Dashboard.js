const Dashboard = React.memo((props) => {

	// ============> Preventing browser's "back" action. <==============
	history.pushState(null, null, location.href);
  	window.onpopstate = () => {history.go(1);};
	// ================================================================= 
	console.log("DASHB", props);
	const [summary, setSummary] = React.useState(false);
	locationStatus = isLocalSession ? 
		lacalCompletionStatus : ScormProcessGetValue("cmi.location");
	// const completionStatus = isLocalSession ? 
	// 	lacalCompletionStatus : ScormProcessGetValue("cmi.completion_status");
	// const successStatus = isLocalSession ? 
	// 	localSuccessStatus : ScormProcessGetValue("cmi.success_status");
	// console.log(completionStatus, lacalCompletionStatus, isLocalSession)
	
	
		// let actualStatus = completionStatus == "unknown" ? 0 
		// : completionStatus == "not attempted" ? 1
		// : completionStatus == "incomplete" ? 2 
		// : completionStatus == "completed" && successStatus == "unknown" ? 3 
		// : completionStatus == "completed" && successStatus == "passed" ? 4 
		// : 42;
		
		if(locationStatus == "")
			locationStatus = stateDefault;
		console.log("Benji", locationStatus);
		
		let actualStatus = locationStatus.search("step0") != -1 ? 0 
		: locationStatus.search("step1") != -1 ? 1
		: locationStatus.search("step2") != -1 ? 2 
		: locationStatus.search("step3") != -1 ? 3 
		: locationStatus.search("step4") != -1 ? 4 
		: 42;
		
		console.log("status", actualStatus);
	if(document.getElementById('main'))
	{
		const main = document.getElementById('main');
		main.style.height = "auto";
	}

	for(let k = 0; k < numOfWeek; k++)
		weeks.at(k).display = true;

	function changeState(){
		if(actualStatus == 0)
		{
			console.log("INITIAL STATE")
			if(locationStatus.search("step0") != -1)
				locationStatus = setScoLocation(locationStatus, "step0");
			InitialState(props);
		}
		else if(actualStatus == 1)
		{
			if(locationStatus.search("step1") != -1)
				locationStatus = setScoLocation(locationStatus, "step1");
			FirstStep(props);
		}
		else if(actualStatus == 2)
		{
			if(locationStatus.search("step2") != -1)
				locationStatus = setScoLocation(locationStatus, "step2");
			SecondStep(props);
		}
		else if(actualStatus == 3)
		{
			if(locationStatus.search("step3") != -1)
				locationStatus = setScoLocation(locationStatus, "step3");
			ThirdStep(props);
		}
		else if (actualStatus == 4)
		{
			if(locationStatus.search("step4") != -1)
				locationStatus = setScoLocation(locationStatus, "step4");
			weeks.at(numOfWeek).display = true;
			if(numOfWeek == 1)
				Finish(props);
			props.setNotify("exit")
				
		}
	}

  return (
    <>
	{!summary ? 
	
	<Box ref={changeState} sx={{ width: '100%', textAlign: 'center'}}>
		<ThemeProvider theme={theme}>
			<Button type="button" variant="outlined" sx={{margin: 1}} onClick={(e) => setSummary(true)}>Summary of the Weeks</Button>
		</ThemeProvider>
		<Stepper activeStep={actualStatus} orientation="vertical">
			{steps.map((steps) => (
			<Step key={steps.label} >
				<StepLabel id="step">
					<p style={{color: "white"}}>{steps.label}</p>
				</StepLabel>
				<StepContent>
					<Typography color="white">{steps.description}</Typography>
				</StepContent>
			</Step>
			))}
		</Stepper>
		{actualStatus === 4 && (
		<Paper square elevation={0} sx={{ p: 4, backgroundColor: 'transparent' }}>
			<Typography>All steps completed - you&apos;ve finished, now you can exit with the button below</Typography>
		</Paper>
      )}
	</Box>
	 : 
	 <Box sx={{width: '100%',textAlign: 'center'}}>
		<ThemeProvider theme={theme}>
			<Button type="button" variant="outlined" sx={{margin: 1}} onClick={(e) => setSummary(false)}>Steps of the week</Button>
		</ThemeProvider>
		<Chart/>
	 </Box>
	 }
  </>
  )
})
