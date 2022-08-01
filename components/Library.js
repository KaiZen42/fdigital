const Library = React.memo((props) => {
    const [first, setFirst] = React.useState(true);
    const main = document.getElementById('main');
	main.style.height = "auto";
    
    if(props.openLibrary)
    {
        if(libreria.type == "youtube")
        {
       
        let iframe = React.useRef(); 

        return(
            <>
            <Box sx={{width: '100%', textAlign: 'center'}}>
                {numOfWeek != 5 && numOfWeek != 6 && numOfWeek != 7 && numOfWeek != 8 &&
                <h6 className="whiteText">Watch the entire video of the library first and then go to the contact section to call {company}</h6>
                }
                {numOfWeek == 6 ? <>
                    <iframe className="youtubeEmb" src={first ? libreria.path : libreria.secondVideo} title="YouTube video player" frameBorder="0" controls="1" allowFullScreen allow="autoplay"/>
                    <ThemeProvider theme={theme}>
                        <Grid container height="7vh" direction="row" justifyContent="center" alignItems="flex-end">
                            <Button sx={{border: 3, margin: 3, '&:hover': { backgroundColor: '#ffffffa5', border: 3, borderColor: '#CC0000', color: '#CC0000'}}} size="small" type="button" variant="outlined" target="_blank" href={first ? libreria.link : libreria.linkSecondVideo}>Move To Canvas Studio</Button>
                            {first && <Button sx={{border: 3, margin: 3, '&:hover': { backgroundColor: '#ffffffa5', border: 3, borderColor: '#0247b7', color: '#0247b7'}}} size="small" type="button" variant="outlined" href={libreria.videoDownload}>Download the Video</Button>}
                            <Button sx={{border: 3, margin: 3, '&:hover': { backgroundColor: '#ffffffa5', border: 3, borderColor: '#CC0000', color: '#CC0000'}}} size="small" type="button" variant="outlined" target="_blank" onClick={()=> setFirst(!first)}>{first ? "Next Video" : "Prev Video"}</Button>
                        </Grid>
                    </ThemeProvider></>
                :
                <>
                <iframe className="youtubeEmb" src={libreria.path} title="YouTube video player" frameBorder="0" controls="1" allowFullScreen allow="autoplay"/>
                <Grid container height="7vh" direction="row" justifyContent="center" alignItems="flex-end">
                    <ThemeProvider theme={theme}>
                        <Button sx={{border: 3, margin: 3, '&:hover': { backgroundColor: '#ffffffa5', border: 3, borderColor: '#CC0000', color: '#CC0000'}}} size="small" type="button" variant="outlined" target="_blank" href={libreria.linkTo}>Move To Canvas Studio</Button>
                        <Button sx={{border: 3, margin: 3, '&:hover': { backgroundColor: '#ffffffa5', border: 3, borderColor: '#0247b7', color: '#0247b7'}}} size="small" type="button" variant="outlined" href={libreria.videoDownload}>Download the Video</Button>
                    </ThemeProvider>
		        </Grid></>}
            </Box>
            </>
        )
        }
    }
    else
    {
        return(
            <>
            <Box sx={{width: '100%', textAlign: 'center'}}>
                <Grid container sx={{color: 'white'}} direction="row" justifyContent="center" alignItems="flex-end">
                <h2>Library Empty</h2>
                </Grid>
            </Box>
            </>
        )
    }
})