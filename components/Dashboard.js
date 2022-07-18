const Dashboard = (props) => {

	// ============> Preventing browser's "back" action. <==============
	history.pushState(null, null, location.href);
  	window.onpopstate = () => {history.go(1);};
	// ================================================================= 
	
	const [summary, setSummary] = React.useState(false);
	const completionStatus = isLocalSession ? 
		lacalCompletionStatus : ScormProcessGetValue("cmi.completion_status");
	const successStatus = isLocalSession ? 
		localSuccessStatus : ScormProcessGetValue("cmi.success_status");
	console.log(completionStatus, lacalCompletionStatus, isLocalSession)
	
	
		let actualStatus = completionStatus == "unknown" ? 0 
		: completionStatus == "not attempted" ? 1
		: completionStatus == "incomplete" ? 2 
		: completionStatus == "completed" && successStatus == "unknown" ? 3 
		: completionStatus == "completed" && successStatus == "passed" ? 4 
		: 42;

	if(document.getElementById('main'))
	{
		const main = document.getElementById('main');
		main.style.height = "auto";
	}

	for(let k = 0; k < numOfWeek; k++)
		weeks.at(k).display = true;

	console.log("stato",actualStatus, "successo", successStatus)
	function changeState(){
		if(actualStatus == 0)
		{
			InitialState(props);
		}
		else if(actualStatus == 1)
		{
			FirstStep(props);
		}
		else if(actualStatus == 2)
		{
			SecondStep(props);
		}
		else if(actualStatus == 3)
		{
			ThirdStep(props);
		}
		else if (actualStatus == 4)
			weeks.at(numOfWeek).display = true;
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
}
