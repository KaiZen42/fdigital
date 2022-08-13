const VideoSimple = (props) => {
	// ============> Preventing browser's "back" action. <==============
	history.pushState(null, null, location.href);
	window.onpopstate = () => {history.go(1);};
	// ================================================================= 
	const [end, setEnd] = React.useState(false);
	const handleEnd = (e) => {
		setEnd(true);
	}
	function fineVideo(){
		FinalSimpleVideo(props);
	}
    return(
        <>
		<Box className="container">
		<Grid container direction="row" justifyContent="center" alignItems="flex-end">
		{!end && 
			<video className="video-responsive" onEnded={handleEnd} autoPlay >
				<source src={videoBoss} type="video/mp4"></source>
			</video>
		}{end &&
			<>
			<div className="video-responsive" style={{backgroundColor: '#12293e', alignItems: 'flex-end', justifyContent: 'center'}}>
			</div>
			</>
		}
        <Webcam className="webcam" id="webcam" muted/>
		</Grid>
		
		{end &&
			<>
			<Grid container direction="row" justifyContent="center" alignItems="flex-end" sx={{minHeight:'40vh', height: '88%'}}>
			<ThemeProvider theme={theme}>
				<IconButton sx={{border: 3}} size="large" type="button" variant="outlined" color="error" onClick={() => fineVideo()}><i className="bi bi-telephone-fill"></i></IconButton>
			</ThemeProvider>
			</Grid>
			</>
		}</Box>
		</>
    )
}