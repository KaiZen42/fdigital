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
	const [result, setResult] = React.useState(ScormProcessGetValue("cmi.progress_measure") ? ScormProcessGetValue("cmi.progress_measure") * 10 * iter : 0);
	const [first, setFirst] = React.useState(true);
	let endCall = false;


	function findColor(){
		if(iter == 0 && first)
			return introScales;
		if(iter == 0 && !first)
			return "media/ScalesColor/IntroSfondo.mp4"
		let divid = result / iter;
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
			setFirst(false);
	}

	function newQuest(e){
		if(iter < videoScale.length)
			setIter(iter + 1);
		else
			endCall = true;
		setEnd(false);
		setResult(value + result);
		setValue(4);
	}
	
	const handleChange = (event, newValue) => {
		if (typeof newValue === 'number') {
			setValue(newValue);
        }
      };

	const main = document.getElementById('main');
	function semaforo(){
		let divid = result / iter;
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

	function fineVideo(){
		FinalScalesVideo(props);
	}

    return(
		<Box className="container" sx={{color: 'white'}}>
			{iter != 0 && !end && semaforo()}
			{first && !end &&
				(<video id="video" className="video-responsive" onEnded={handleEndFirst} muted={""} autoPlay >
					<source src={videoPath} type="video/mp4"></source>
				</video>
				)}
			{!first && !end && iter < videoScale.length &&
				(
				<>
					<video id="video" className="video-responsive" onEnded={first ? handleEndFirst : handleEnd} muted={first ? "" : "muted"} autoPlay >
						<source src={videoPath} type="video/mp4"></source>
					</video>
					<ThemeProvider theme={theme}>
					<Box className="scritta puff" sx={{flexGrow: 1, position: 'relative'}}>
						<Grid height="80%" container direction="row" justifyContent="center" textAlign="center" alignItems="flex-end" sx={{color: 'white'}}>
							<h4 className="adaptToPhone">{videoScale.at(iter).description}</h4>
						</Grid>
					</Box>
					</ThemeProvider>
				</>
				)}
				{end && iter < videoScale.length && (
				<>
				<video id="video" className="video-responsive overlay" autoPlay muted loop>
					<source src={videoPath} type="video/mp4"></source>
				</video>
				<ThemeProvider theme={theme}>
				<Grid container direction="column" justifyContent="space-between" sx={{flexGrow: 1, '@media (max-width: 415px)': {paddingTop: "15vh"}, '@media (min-width: 415px)': {height: '100%'}}}>
				<Grid className="scritta2" container direction="row" justifyContent="center" textAlign="center" alignItems="flex-end" sx={{color: 'white', position: 'relative', '@media (min-width: 415px)': {height: '50%'}}}>
					<h4 className="adaptToPhone">{videoScale.at(iter).description}</h4>
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
					<Button type="button" variant="outlined" sx={{margin: 1}} onClick={(e) => newQuest(e)}>NEXT</Button>
				</Grid>
				{/* <Grid container direction="row" justifyContent="center" alignItems="flex-end" sx={{color: 'white'}}>
					<Button type="button" variant="outlined" sx={{margin: 1}} onClick={() => setEnd(false)}>PREV</Button> 
				</Grid>*/}
				</Grid>
				</ThemeProvider>
				</>
				)}
				{/* {!first && <ThemeProvider theme={theme}>
					<Box sx={{flexGrow: 1, position: 'relative'}}>
						<Grid height="0%" container direction="row" justifyContent="center" textAlign="center" alignItems="flex-end" sx={{color: 'white'}}>
							<h4>{videoScale.at(iter).description}</h4>
						</Grid>
					</Box>
				</ThemeProvider> }*/}
				
				{iter == videoScale.length && !first && (
					<>
					<video id="video" className="video-responsive" autoPlay>
						<source src={videoPath} type="video/mp4"></source>
					</video>
					<Grid container direction="column" justifyContent="center" alignItems="flex-end" sx={{ justifyContent: 'space-between', alignItems: 'center', height: '46vw'}}>
					<ThemeProvider theme={theme}>
						<div></div>
						{numOfWeek != 9 && numOfWeek != 10  && numOfWeek != 11 &&
						<h4 style={{position: 'relative'}} className="scritta2">Thanks! Bye</h4>}
						<IconButton sx={{border: 3}} size="large" type="button" variant="outlined" color="error" onClick={() => fineVideo()}><i className="bi bi-telephone-fill"></i></IconButton>
					</ThemeProvider>
					</Grid>
					</>
				)}
          <Webcam className="webcam" id="webcam" muted/>
		</Box>
        ) 
}
