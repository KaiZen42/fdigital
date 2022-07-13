const RealCall = (props) => {

	let who = props.who;
	function handleEnd(){
		
		props.deactivate.current.style.pointerEvents = 'none';
		props.deactivate.current.style.color = 'darkGrey';
		props.x == "realInterview" ? props.setX("branching") : props.x == "realScales" ? props.setX("scales") : props.setX("video");
	}
	return(
		<>
		{closeToggle()}
		<div className="container">
		  <video className="video-responsive" onEnded={handleEnd} autoPlay>
			<source src={`${loc}media/SfondoChiamata.mp4`} type="video/mp4"></source>
		  </video>
		<Grid container sx={{width: '100%', zIndex: 100, textAlign: 'center', height: '36vw'}} justifyContent="center">
			<Grid container sx={{zIndex: 100, textAlign: 'center'}} justifyContent="center">
				<h6>{phoneBook.at(who).nome}</h6>
			</Grid>
			<img className="roundImg" src={phoneBook.at(who).img}></img>
		</Grid>
		<Grid container sx={{width: '100%', zIndex: 100, textAlign: 'center', padding: '2vw', '@media (min-width: 391px)': {padding: "15px"}}} justifyContent="center">
			<ThemeProvider theme={theme}>
				<IconButton sx={{border: 3, '@media (max-width: 390px)': {padding: "1px"}, '@media (min-width: 391px)': {padding: "12px"}}} type="button" variant="outlined" color="error" onClick={() => props.setX("rubric")}><i className="bi bi-telephone-fill reverse"></i></IconButton>
			</ThemeProvider>
		</Grid>
		</div>
		</>
	  )
  }