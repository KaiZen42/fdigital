function findWhoTalk(it, i)
{
  if(it == 1 || it == 5 || it == 8)
  {
    if(i == 1)
      return "media/Company/Amna.png"
    if(i == 2)
      return "media/Company/Sara.png"
  }
  else if(it == 2 || it == 6 || it == 7)
  {
    if(i == 1)
      return "media/Company/Lina.png"
    if(i == 2)
      return "media/Company/Sara.png"
  }
  else if(it == 3 || it == 4 || it == 9)
  {
    if(i == 1)
      return "media/Company/Amna.png"
    if(i == 2)
      return "media/Company/Lina.png"
  }
}

const Branching = (props) => {

  // ============> Preventing browser's "back" action. <==============
	history.pushState(null, null, location.href);
	window.onpopstate = () => {history.go(1);};
	// ================================================================= 
  const [choice, setChoice] = React.useState(0);
  const [it, setIt] = React.useState(null);
  const [end, setEnd] = React.useState(false);
  const [screen, setScreen] = React.useState(true);

  let nidx = ScormProcessGetValue("cmi.suspend_data");
  // if (ScormProcessGetValue("cmi.completion_status") == "not attempted")
  //         ScormProcessSetValue("cmi.completion_status", "incomplete");
  //nidx = 0;
  // isEnd = "incomplete";
  nidx = !nidx ? (nidx = 0) : (nidx = parseInt(nidx));
  let questNun = nidx;

  if (questNun > 0 && it == null) {
    for (let i = 0; i < videoQ.length; i++) {
      if (questNun > 3) {
        questNun -= 3;
      } else {
        console.log("IT=" + (i + 1) + " choice=" + questNun);
        setChoice(questNun - 1);
        setIt(i + 1);
        break;
      }
    }
  } else if (it == null) setIt(0);

  React.useEffect(() => {
    setEnd(false);
  }, [choice, it]);

  function fineVideo() {
    if(screen == false)
    {
      setScreen(true);
      handleFullScreenEvent();
    }
    FinalBranchingVideo(props);
    // props.deactivate.current.style.pointerEvents = "";
    // props.deactivate.current.style.color = "";
    // props.setX("rubric");
    // props.setNotify("home");
    // if (isLocalSession) lacalCompletionStatus = "completed";
    // else ScormProcessSetValue("cmi.completion_status", "completed");

    // EmailText.at(0).display = true;
    // phoneBook.at(2).real = false;
    // ScormProcessSetValue("cmi.suspend_data", 0);
  }

  const handleFullScreenEvent = (e) => {
    !screen ? setScreen(true) : setScreen(false);
    if (screen === true) {
      let elem = document.getElementById("main");

      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      }
    } else if (screen === false) {
      if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  };

  function TransitionRight(props) {
    return <Slide {...props} direction="left" />;
  }

  if (it <= videoQ.length) {
    //&& isEnd == "incomplete")
    const handleEvent = (e) => {
      console.log("prima" + it);
      if (it == videoQ.length) setIt(it + 1);
      console.log("dopo" + it);
      setEnd(true);
    };

    const handleSnackEvent = (e, choice) => {
      ScormProcessSetValue("cmi.suspend_data", it * 3 + choice + 1);
      console.log("CALC...", it * 3 + choice + 1);
      setChoice(choice);
      setIt(it + 1);
    };
    return (
      <>
        <div className="sfondo" id="sfondo">
          <div className="fullScreen">
            <Button onClick={handleFullScreenEvent} sx={{ color: "#003a70"}}>
              <i className="bi bi-arrows-fullscreen"></i>
            </Button>
          </div>
          {!end && (
            <>
              <video
                className={
                  !screen ? "video-responsiveFull" : "video-responsive"
                }
                onEnded={handleEvent}
                id="video"
                autoPlay
              >
                <source
                  src={
                    it == 0
                      ? `${loc + videoIntro.path}`
                      : `${loc + videoQ.at(it - 1).terzina.at(choice).path}`
                  }
                  type="video/mp4"
                ></source>
              </video>
            </>
          )}
          {end && it < videoQ.length && (
            <>
              <video
                className={
                  !screen
                    ? "video-responsiveFull overlay"
                    : "video-responsive overlay"
                }
                id="video"
                autoPlay
                muted
                loop
              >
                <source
                  src={
                    it == 0
                      ? `${loc + videoIntro.waitGif}`
                      : `${loc + videoQ.at(it - 1).terzina.at(choice).waitGif}`
                  }
                  type="video/mp4"
                ></source>
              </video>
              <div className="question container">
                <div className={!screen ? "rowFull" : "row"}>
                  {" "}
                  {/*setIt in funzione insieme al set di scorm per il resume e pure choice*/}
                  <Snackbar
                    className="snack col-12"
                    onClick={(e) => {
                      handleSnackEvent(e, 0);
                    }}
                    open={end}
                    message={videoQ.at(it)?.terzina.at(0).description}
                    TransitionComponent={TransitionRight}
                    transitionDuration={1000}
                  />
                  <Snackbar
                    className="snack col-12"
                    onClick={(e) => {
                      handleSnackEvent(e, 1);
                    }}
                    open={end}
                    message={videoQ.at(it)?.terzina.at(1).description}
                    TransitionComponent={TransitionRight}
                    transitionDuration={2000}
                  />
                  <Snackbar
                    className="snack col-12"
                    onClick={(e) => {
                      handleSnackEvent(e, 2);
                    }}
                    open={end}
                    message={videoQ.at(it)?.terzina.at(2).description}
                    TransitionComponent={TransitionRight}
                    transitionDuration={3000}
                  />
                </div>
              </div>
              <div className="repeat">
                <Button
                  className="buttonRepeat"
                  sx={{color: "#003a70"}}
                  onClick={() => {
                    setEnd(false);
                  }}
                >
                  <i className="bi bi-arrow-repeat"></i>
                </Button>
              </div>
            </>
          )}
        </div>
        <Webcam className="webcam" id="webcam" muted />
        {numOfWeek == 3 && it <= videoQ.length &&
          <>
          <img className="similWebcam" id="similWebcam" src={findWhoTalk(it, 1)} />
          <img className="similWebcam2" id="similWebcam2" src={findWhoTalk(it, 2)} />
          </>
          }
      </>
    );
  } else {
    return (
      <Box className="container">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-end"
        >
          <video
            className="video-responsive"
            style={{
              backgroundColor: "#12293e",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
            id="video"
            autoPlay
          ><source src={videoOutro}></source>
          </video>
          <Webcam className="webcam" id="webcam" muted />
          {numOfWeek == 3 && it <= videoQ.length &&
          <>
          <img className="similWebcam" id="similWebcam" src={findWhoTalk(it, 1)} />
          <img className="similWebcam2" id="similWebcam2" src={findWhoTalk(it, 2)} />
          </>
          }
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-end"
          sx={{ minHeight: "40vh", height: "88%" }}
        >
          <ThemeProvider theme={theme}>
            <IconButton
              sx={{ border: 3 }}
              size="large"
              type="button"
              variant="outlined"
              color="error"
              onClick={() => fineVideo()}
            >
              <i className="bi bi-telephone-fill"></i>
            </IconButton>
          </ThemeProvider>
        </Grid>
      </Box>
    );
  }
};
