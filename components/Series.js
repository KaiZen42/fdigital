const Series = React.memo((props) => {
	// ============> Preventing browser's "back" action. <==============
	history.pushState(null, null, location.href);
	window.onpopstate = () => {history.go(1);};
	// ================================================================= 
    const Link = ReactRouterDOM.NavLink;

    props.deactivate.current.style.pointerEvents = 'none';
    props.deactivate.current.style.color = 'darkGrey';

	console.log(libreria.find(element => element.type == "series"));
    return(
        <>
        {closeToggle()}
		<Box className="container">
			<Grid container direction="row-reverse" sx={{flexWrap: 'wrap', justifyContent: 'space-between'}}>
				<h6 className="whiteText">Watch the entire episode of the series before clicking the button "back to home", after that you won't be able to see the episode</h6>
				<Link exact onClick={() => FinalEpisode(props)} to={`${locPath}`} className="nav-link" style={{zIndex: '100000', color: 'white'}}><i className="bi bi-house-fill"></i>Back to Home</Link>
			</Grid>
			<Grid container direction="row" justifyContent="center" alignItems="flex-end" className="iframe-wrapper">
				<iframe src={libreria.find(element => element.type == "series").path} title="YouTube video player" frameBorder="0" controls="1" modestbranding allowFullScreen allow="autoplay"/>
			</Grid>
		</Box>
		</>
    )
})