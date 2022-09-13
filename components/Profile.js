const Profile = () => {
	//adattare la height di main quando c'è text
	let name = ScormProcessGetValue("cmi.learner_name");
	
	if(!name)
		name = "Your Name";
	const main = document.getElementById('main');
	main.style.height = "auto";
	  return(
		<Box id="boxProfile" sx={{width: '100%', flexGrow: 1}}>
		  <Grid container direction="row">
		  <Divider flexItem orientation='vertical'>
			  <Avatar {...stringAvatar(name, true)} sx={{ width: 60, height: 60, backgroundColor: stringToColor(name)}}></Avatar>
		  </Divider>
		  <Grid item xs={8} sm={8} md={8} className="container profile">
			<Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
			  <Grid item className="cardProf">
				<h4>Full Name</h4><h5>{name}</h5>
				<h4>Phone Number</h4><h5>Not Set</h5>
			  </Grid>
			  <Grid item className="cardProf">
				<h4>Language</h4><h5>English</h5>
				<h4>Time Zone</h4><h5>(GMT+2:00) Rome</h5>
			  </Grid>
			  <Grid item className="cardProf">
				<h4>Date Format</h4><h5>mm/dd/yyyy</h5>
				<h4>Time Format</h4><h5>24h</h5>
			  </Grid>
			</Grid>
		  </Grid>
		  </Grid>
		</Box>
	  )
	}