function handleClose(e, isEnd){
	
	
	if(isEnd == "incomplete"){
	
		ScormProcessSetValue("cmi.completion_status", "completed");
		ScormProcessSetValue("cmi.success_status", "passed");
	}
	doExit()
}

function TransitionRight(props) {
	return (
	<Slide {...props} direction="left"/>
	)
  }

const End = (props) => {
	return(
		<>
		<div className="sfondo" id="sfondo">
			<video className="video-responsive" id="video" autoPlay>
			  <source src={videoOutro.path} type="video/mp4"></source>
			</video>
			<div className="question container">
			   <div className="row">
				<Snackbar className="snack col-12" onClick={(e) => {handleClose(e, props.isEnd)}} open={true} message="End The Call" TransitionComponent={TransitionRight} transitionDuration={1000}/>
			  </div>
			</div>
	  </div>
	  <Webcam className="webcam" id="webcam" muted/>
	  </>
		// <div className="question-container containerMax">
		// 		  <Divider className="divider">
		// 			<img src="media/logo-luiss-white.png"></img>
		// 		  </Divider>
		// 		  <ThemeProvider theme={theme}>
		// 			<Divider className="divider">
		// 			  <Button variant="outlined" color="primary" onClick={ () =>{
		// 				  if(props.isEnd == "incomplete"){
		// 					  ScormProcessSetValue("cmi.completion_status", "completed");
		// 					  ScormProcessSetValue("cmi.success_status", "passed");
		// 					}
		// 				doExit()
		// 				}}>Close
		// 			  </Button>
		// 			</Divider>
		// 		</ThemeProvider>
		// </div>
	)
}
  
  
