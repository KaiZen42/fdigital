const Series = React.memo((props) => {
	// ============> Preventing browser's "back" action. <==============
	history.pushState(null, null, location.href);
	window.onpopstate = () => {history.go(1);};
	// ================================================================= 
	const [end, setEnd] = React.useState(false);
    const Link = ReactRouterDOM.NavLink;
	const handleEnd = (e) => {
		setEnd(true);
	}
    props.deactivate.current.style.pointerEvents = 'none';
    props.deactivate.current.style.color = 'darkGrey';

    return(
        <>
        {closeToggle()}
		<Box className="container">
		<Grid container direction="row" justifyContent="center" alignItems="flex-end">
		{!end && 
			<video className="video-responsive" onEnded={handleEnd} autoPlay >
				<source src={videoBoss} type="video/mp4"></source>
			</video>
		}{end &&
			<div className="video-responsive" style={{backgroundColor: '#12293e', alignItems: 'flex-end', justifyContent: 'center'}}>
			</div>
		}
		</Grid>
		
		{end &&
			<>
			<Grid container direction="row" justifyContent="center" alignItems="flex-end" sx={{minHeight:'40vh', height: '88%'}}>
			<ThemeProvider theme={theme}>
                <Link exact onClick={() => FinalEpisode(props)} to={`${locPath}`} className="nav-link" style={{zIndex: '100000', color: 'white'}}><i className="bi bi-house-fill"></i>Back to Home</Link>
				{/* <IconButton sx={{border: 3}} size="large" type="button" variant="outlined" color="error" onClick={() => FinalEpisode(props)}><i className="bi bi-telephone-fill"></i></IconButton> */}
			</ThemeProvider>
			</Grid>
			</>
		}</Box>
		</>
    )
})