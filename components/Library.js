const Library = (props) => {
    const main = document.getElementById('main');
	main.style.height = "auto";
    
    if(ScormProcessGetValue("cmi.completion_status") == "incomplete" || lacalCompletionStatus == "incomplete")
    {
        if(libreria.type == "youtube")
        {
       
        return(
            <>
            <Box sx={{widht: '100%', textAlign: 'center'}}>
                <h6 className="whiteText">Watch the entire video of the library first and then go to the contact section to call L'Mane</h6>
                <iframe className="youtubeEmb" src={libreria.path} title="YouTube video player" frameBorder="0" allowFullScreen/>
                <Grid container height="7vh" direction="row" justifyContent="center" alignItems="flex-end">
                    <ThemeProvider theme={theme}>
                        <Button sx={{border: 3, margin: 3, '&:hover': { backgroundColor: '#ffffffa5', border: 3, borderColor: '#CC0000', color: '#CC0000'}}} size="small" type="button" variant="outlined" target="_blank" href={libreria.linkTo}>Move To YouTube</Button>
                        <Button sx={{border: 3, margin: 3, '&:hover': { backgroundColor: '#ffffffa5', border: 3, borderColor: '#0247b7', color: '#0247b7'}}} size="small" type="button" variant="outlined" href={libreria.videoDownload}>Download the Video</Button>
                    </ThemeProvider>
		        </Grid>
            </Box>
            </>
        )
        }
    }
    else
    {
        return(
            <>
            <div className="text">
                <div id="intro" className="title-container">
                <h2>Library Empty</h2>
                </div>
            </div>
            </>
        )
    }
}