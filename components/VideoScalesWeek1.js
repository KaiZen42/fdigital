const VideoScales = (props) => {

	// ============> Preventing browser's "back" action. <==============
	history.pushState(null, null, location.href);
	window.onpopstate = () => {history.go(1);};
	// ================================================================= 
	let nidx = ScormProcessGetValue("cmi.suspend_data");
	nidx = !nidx ? (nidx = 0) : (nidx = parseInt(nidx));

	const [value, setValue] = React.useState(4);
	const [end, setEnd] = React.useState(false);
	const [iter, setIter] = React.useState(nidx);
	const [iterQuestion, setIterQuestion] = React.useState(0);
	const [result, setResult] = React.useState(ScormProcessGetValue("cmi.progress_measure") ? ScormProcessGetValue("cmi.progress_measure") * 10 * iter : 0);
	const [first, setFirst] = React.useState(true);
	const [resultLow, setResultLow] = React.useState(7);
	const [testFinish, setTestFinish] = React.useState(null);
	let endCall = false;



	function EndTest(props) {
		const Link = ReactRouterDOM.NavLink;
		const handleEnd = () => {
				AfterTest(props);
		}
	
		return (
			<>
				{(numOfWeek == 1 || numOfWeek == 12) && props.isEndButton &&
					<ThemeProvider theme={theme}>
						<Grid container direction="row" justifyContent="center" textAlign="center" alignItems="flex-end">
							<Divider>
								<Link exact onClick={handleEnd} to={`${locPath}`} className="nav-link"><i className="bi bi-house-fill"></i>Back to Home</Link>
							</Divider>
						</Grid>
					</ThemeProvider>}
			</>
		)
	}
	function findColor(){
		if(iter == 0 && first && type == 0)
			return introScales1;
		else if(iter == 0 && first && type == 1)
			return introScales2;
		else if(iter == 0 && first && type == 2)
			return introScales3;
		else if(type == 4)
			return videoFinale;
		if((iter == 0 && !first) || type == 0)
			return "media/ScalesColor/IntroSfondo.mp4"
		let divid = result / iter;
		if(type == 2)
			divid = result;
		if(divid < 2)
			return "media/ScalesColor/1.mp4"
		else if(divid < 3)
			return "media/ScalesColor/2.mp4"
		else if(divid < 4)
			return "media/ScalesColor/3.mp4"
		else if(divid < 5)
			return "media/ScalesColor/4.mp4"
		else if(divid < 6)
			return "media/ScalesColor/5.mp4"
		else if(divid < 7)
			return "media/ScalesColor/6.mp4"
		else if(divid < 8)
			return "media/ScalesColor/7.mp4"
	}

	let videoPath = findColor();
	const handleEnd = (e) => {
			setEnd(true);	
	}
	const handleEndFirst = (e) => {
		main.style.backgroundColor = "";
		main.style.borderRadius = "";
			setFirst(false);
	}

	function newQuest(e, videoScale){
		if(iter < videoScale.length)
			setIter(iter + 1);
		else
			endCall = true;
		setEnd(false);
		if(type != 2)
			setResult(value + result);
		else
			setResult(value);
		setValue(4);
	}

	function newQuest1(e){
		if(iterQuestion < videoScale1.at(iter).numQuestion)
			setIterQuestion(iterQuestion + 1);
		else if(iter < videoScale1.length)
		{
			setIter(iter + 1)
			setIterQuestion(0)
		}
		else
			endCall = true;
		setEnd(false);
		setValue(4);
	}

	function newQuest2(e, videoScale, int){
		let valore = value;
		if(int == 1)
			valore = 4;
		if(iter < videoScale.length)
			setIter(iter + 1);
		else
			endCall = true;
		setEnd(false);
		if(resultLow > valore)
		{
			setResultLow(valore);
			whichVideo = iter;
		}
		setResult(valore);
		setValue(4);
	}
	
	const handleChange = (event, newValue) => {
		if (typeof newValue === 'number') {
			setValue(newValue);
        }
      };

	const main = document.getElementById('main');
	function semaforo(){
		let divid;
		if(type != 2)
			divid = result / iter;
		else
			divid = result;
		ScormProcessSetValue("cmi.progress_measure", divid / 10)
		ScormProcessSetValue("cmi.suspend_data", iter);
		if(divid < 2){
			main.style.boxShadow = "0px 0px 35px 15px #a10000";
			main.style.transition = "box-shadow 1s ease-in-out"
			main.style.borderRadius = "3%";
		}
		else if(divid < 3){
			main.style.boxShadow = "0px 0px 35px 15px #a13a00";
			main.style.transition = "box-shadow 1s ease-in-out"
			main.style.borderRadius = "3%";
		}
		else if(divid < 4){
			main.style.boxShadow = "0px 0px 35px 15px #d88f03";
			main.style.transition = "box-shadow 1s ease-in-out"
			main.style.borderRadius = "3%";
		}
		else if(divid < 5){
			main.style.boxShadow = "0px 0px 35px 15px #d8bb03";
			main.style.transition = "box-shadow 1s ease-in-out"
			main.style.borderRadius = "3%";
		}
		else if(divid < 6){
			main.style.boxShadow = "0px 0px 35px 15px #cbd803";
			main.style.transition = "box-shadow 1s ease-in-out"
			main.style.borderRadius = "3%";
		}
		else if(divid < 7){
			main.style.boxShadow = "0px 0px 35px 15px #89d803";
			main.style.transition = "box-shadow 1s ease-in-out"
			main.style.borderRadius = "3%";
		}
		else if(divid < 8){
			main.style.boxShadow = "0px 0px 35px 15px #15ff00";
			main.style.transition = "box-shadow 1s ease-in-out"
			main.style.borderRadius = "3%";
		}
	}

	function handleEndNoTest(e, props){
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
	let name = ScormProcessGetValue("cmi.learner_name");
	const Link = ReactRouterDOM.NavLink;
	// let name = "Valariano, Beniamino"
	console.log("name=", name);
	if(!name)
		name = "Valariano, Beniamino";
	console.log("name=", name);
	name = name.split(", ")[0];
	name = name.toUpperCase();
	console.log("name=", name);
	let link = users.find(data => data["Last Name"] === name);
	console.log("user", users)
	console.log("AO", users.find(data => data["Last Name"] === name))
	// if(!users.find(data => data["Last Name"] === name) && type == 0)
	// {
	// 	return(
	// 		<Grid container direction="column" sx={{color: 'white'}}>
	// 			<Divider>
	// 				Test non disponibile
	// 			</Divider>
	// 			<Divider>
	// 				{/* <EndTest setTestSection={props.setTestSection} setEmailCount={props.setEmailCount} setNotify={props.setNotify} isEndButton={testFinish} setX={props.setX} deactivate={props.deactivate}></EndTest> */}
	// 				<Link onClick={(e) => handleEndNoTest(e, props)} exact to={`${locPath}`} className="nav-link"><i className="bi bi-house-fill"></i>Back to Home</Link>
	// 			</Divider>
	// 		</Grid>
	// 	);
	// }
	// console.log("link=",link);
	window.addEventListener("message", function (e) {
		//   if (e.origin !== "http://localhost:8080") return;
		if (e.data !== "qualtrix_survey") return;
		setTestFinish(testFinish || testFinish == null ? false : true);
	}, false);

    return(
		<>
		{/* PERSONAL SCALES */}
		{type == 0 && 
		<Box className="container" sx={{color: 'white'}}>
			{first && !end &&
			<>
				<video id="video" className="video-responsive" onEnded={handleEndFirst} muted={""} autoPlay >
					<source src={videoPath} type="video/mp4"></source>
				</video>
				<Webcam className="webcam" id="webcam" muted/>
			</>
			}
			{!first && !end &&
			<ThemeProvider theme={theme}>
				<Box id="box" sx={{ flexGrow: 1, color: 'white', width: 'auto' }}>
					{<iframe style={{ height: "66vh", width: "100%", backgroundColor: "#003a7000" }} frameBorder="0" src={!users.find(data => data["Last Name"] === name) ? testSicuro : link.Link}></iframe>}
					<EndTest setTestSection={props.setTestSection} setEmailCount={props.setEmailCount} setNotify={props.setNotify} isEndButton={testFinish} setX={props.setX} deactivate={props.deactivate} />
				</Box>
			</ThemeProvider>
			}
				
		</Box>}
		{/* GENERAL BEHAVIOUR */}
		{type == 1 && 
		<Box className="container" sx={{color: 'white'}}>
			{iter != 0 && !end && semaforo()}
			{first && !end &&
				(<video id="video" className="video-responsive" onEnded={handleEndFirst} muted={""} autoPlay >
					<source src={videoPath} type="video/mp4"></source>
				</video>
			)}
			{!first && !end && iter < videoScale2.length &&
				(
				<>
					<video id="video" className="video-responsive" onEnded={first ? handleEndFirst : handleEnd} muted={first ? "" : "muted"} autoPlay >
						<source src={videoPath} type="video/mp4"></source>
					</video>
					<ThemeProvider theme={theme}>
					<Box className="scritta puff" sx={{flexGrow: 1, position: 'relative'}}>
						<Grid height="80%" container direction="row" justifyContent="center" textAlign="center" alignItems="flex-end" sx={{color: 'white'}}>
							<h4 className="adaptToPhone">{videoScale2.at(iter).description}</h4>
						</Grid>
					</Box>
					</ThemeProvider>
				</>
				)}
				{end && iter < videoScale2.length && (
				<>
				<video id="video" className="video-responsive overlay" autoPlay muted loop>
					<source src={videoPath} type="video/mp4"></source>
				</video>
				<ThemeProvider theme={theme}>
				<Grid container direction="column" justifyContent="space-between" sx={{flexGrow: 1, '@media (max-width: 415px)': {paddingTop: "15vh"}, '@media (min-width: 415px)': {height: '100%'}}}>
				<Grid className="scritta2" container direction="row" justifyContent="center" textAlign="center" alignItems="flex-end" sx={{color: 'white', position: 'relative', '@media (min-width: 415px)': {height: '50%'}}}>
					<h4 className="adaptToPhone">{videoScale2.at(iter).description}</h4>
				</Grid>
				<Grid container direction="column" justifyContent="flex-end" flexWrap="nowrap" alignItems="center" sx={{color: 'white', '@media (min-width: 415px)': {height: '50%'}}}>
				<Slider
					defaultValue={4}
					onChange={handleChange}
					min={1}
					step={1}
					max={7}
					marks={marks}
					color="primary"
					getAriaValueText={valuetext}
					aria-labelledby=""
					valueLabelDisplay="auto"
					sx={{width: "40%", minWidth: "30vh", height: "7px"}}/>
					<Button type="button" variant="outlined" sx={{margin: 1}} onClick={(e) => newQuest(e, videoScale2)}>NEXT</Button>
				</Grid>
				</Grid>
				</ThemeProvider>
				</>
				)}
				{iter == videoScale2.length && (
					<>
					<video id="video" className="video-responsive" autoPlay>
						<source src={videoPath} type="video/mp4"></source>
					</video>
					<Grid container direction="column" justifyContent="center" alignItems="flex-end" sx={{ justifyContent: 'space-between', alignItems: 'center', height: '46vw'}}>
					<ThemeProvider theme={theme}>
						<div></div>
						<h4 style={{position: 'relative'}} className="scritta2">Thanks! Bye</h4>
						<IconButton sx={{border: 3}} size="large" type="button" variant="outlined" color="error" onClick={() => FinalScalesVideo1(props)}><i className="bi bi-telephone-fill"></i></IconButton>
					</ThemeProvider>
					</Grid>
					</>
				)}
				<Webcam className="webcam" id="webcam" muted/>
		</Box>}
		{/* SPECIFIC BEHAVIOUR */}
		{type == 2 && 
		<Box className="container" sx={{color: 'white'}}>
			{iter != 0 && !end && semaforo()}
			{first && !end &&
				(<video id="video" className="video-responsive" onEnded={handleEndFirst} muted={""} autoPlay >
					<source src={videoPath} type="video/mp4"></source>
				</video>
			)}
			{!first && !end && iter < videoScale3.length &&
				(
				<>
					<video id="video" className="video-responsive" onEnded={first ? handleEndFirst : handleEnd} muted={first ? "" : "muted"} autoPlay >
						<source src={videoPath} type="video/mp4"></source>
					</video>
					<ThemeProvider theme={theme}>
					<Box className="scritta puff" sx={{flexGrow: 1, position: 'relative'}}>
						<Grid height="80%" container direction="row" justifyContent="center" textAlign="center" alignItems="flex-end" sx={{color: 'white'}}>
							<h4 className="adaptToPhone">{videoScale3.at(iter).description}</h4>
						</Grid>
					</Box>
					</ThemeProvider>
				</>
				)}
				{end && iter < videoScale3.length && (
				<>
				<video id="video" className="video-responsive overlay" autoPlay muted loop>
					<source src={videoPath} type="video/mp4"></source>
				</video>
				<ThemeProvider theme={theme}>
				<Grid container direction="column" justifyContent="space-between" sx={{flexGrow: 1, '@media (max-width: 415px)': {paddingTop: "15vh"}, '@media (min-width: 415px)': {height: '100%'}}}>
				<Grid className="scritta2" container direction="row" justifyContent="center" textAlign="center" alignItems="flex-end" sx={{color: 'white', position: 'relative', '@media (min-width: 415px)': {height: '50%'}}}>
					<h4 className="adaptToPhone">{videoScale3.at(iter).description}</h4>
				</Grid>
				<Grid container direction="column" justifyContent="flex-end" flexWrap="nowrap" alignItems="center" sx={{color: 'white', '@media (min-width: 415px)': {height: '50%'}}}>
				<Slider
					defaultValue={4}
					onChange={handleChange}
					min={1}
					step={1}
					max={7}
					marks={marks}
					color="primary"
					getAriaValueText={valuetext}
					aria-labelledby=""
					valueLabelDisplay="auto"
					sx={{width: "40%", minWidth: "30vh", height: "7px"}}/>
					<Grid container direction="row" justifyContent="center" textAlign="center">
						<Button type="button" variant="outlined" sx={{margin: 1}} onClick={(e) => newQuest2(e, videoScale3, 0)}>NEXT</Button>
						<Button type="button" variant="outlined" sx={{margin: 1}} onClick={(e) => newQuest2(e, videoScale3, 1)}>SKIP</Button>
					</Grid>
				</Grid>
				</Grid>
				</ThemeProvider>
				</>
				)}
				{iter == videoScale3.length && (
					<>
					<video id="video" className="video-responsive" autoPlay muted>
						<source src={videoPath} type="video/mp4"></source>
					</video>
					<Grid container direction="column" justifyContent="center" alignItems="flex-end" sx={{ justifyContent: 'space-between', alignItems: 'center', height: '46vw'}}>
					<ThemeProvider theme={theme}>
						<div></div>
						<h4 style={{position: 'relative'}} className="scritta2">Thanks! Bye</h4>
						<IconButton sx={{border: 3}} size="large" type="button" variant="outlined" color="error" onClick={() => FinalScalesVideo2(props)}><i className="bi bi-telephone-fill"></i></IconButton>
					</ThemeProvider>
					</Grid>
					</>
				)}
				<Webcam className="webcam" id="webcam" muted/>
		</Box>}
		{type == 4 && 
		<Box className="container" sx={{color: 'white'}}>
			{!end &&
			<>
				<video id="video" className="video-responsive" onEnded={handleEnd} muted={""} autoPlay >
					<source src={videoPath} type="video/mp4"></source>
				</video>
				<Webcam className="webcam" id="webcam" muted/>
			</>
			}
			{end && (
					<>
					<video id="video" className="video-responsive" autoPlay muted>
						<source src={"/media/ScalesColor/IntroSfondo.mp4"} type="video/mp4"></source>
					</video>
					<Grid container direction="column" justifyContent="center" alignItems="flex-end" sx={{ justifyContent: 'space-between', alignItems: 'center', height: '46vw'}}>
					<ThemeProvider theme={theme}>
						<div></div>
						<h4 style={{position: 'relative'}} className="scritta2">Thanks! Bye</h4>
						<IconButton sx={{border: 3}} size="large" type="button" variant="outlined" color="error" onClick={() => FinalSimpleVideo(props)}><i className="bi bi-telephone-fill"></i></IconButton>
					</ThemeProvider>
					</Grid>
					</>
				)}
		</Box>}
		</>
	)
}
