const FakeCall = (props) => {

	const [end, setEnd] = React.useState(false);
	let who = props.who;
	function handleEnd(){
		setEnd(true);
		const fake = document.getElementById('fake');
		fake.style.filter = "grayscale(80%)"
		const img = document.getElementById('img');
		img.style.filter = "drop-shadow(10px 10px 12px #700000) invert(15%)"
	}
	return(
		<>
		{closeToggle()}
		<div className="container">
		  <video id="fake" className="video-responsive" onEnded={handleEnd} autoPlay>
			<source src={`${loc}media/SfondoChiamata.mp4`} type="video/mp4"></source>
		  </video>
		<Grid container sx={{width: '100%', zIndex: 100, textAlign: 'center'}} justifyContent="center">
			<Grid container sx={{zIndex: 100, textAlign: 'center'}} justifyContent="center">
				{end ? <h6>This contact is not available</h6> : <h6>{phoneBook.at(who).nome}</h6>}
			</Grid>
			<img id="img" className="roundImg" src={phoneBook.at(who).img}></img>
		</Grid>
		<Grid container sx={{width: '100%', zIndex: 100, textAlign: 'center', padding: '2vw', '@media (min-width: 391px)': {padding: "15px"}}} justifyContent="center">
			<ThemeProvider theme={theme}>
				<IconButton sx={{border: 3, '@media (max-width: 390px)': {padding: "4px"}, '@media (min-width: 391px)': {padding: "12px"}}} type="button" variant="outlined" color="error" onClick={() => props.setX("rubric")}><i className="bi bi-telephone-fill reverse"></i></IconButton>
			</ThemeProvider>
		</Grid>
		</div>
		</>
	)
  }