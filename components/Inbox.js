const Inbox = React.memo((props) => {
  const [state, setState] = React.useState(false);
	// if (ScormProcessGetValue("cmi.completion_status") == "unknown")
	// 	ScormProcessSetValue("cmi.completion_status", "not attempted");
    const main = document.getElementById('main');
		main.style.height = "auto";

	const emailLength = EmailText.length;
	
	let num = ScormProcessGetValue("cmi.interactions._count");
//modificato
  function handleClick(i, e) {
    closeToggle();
	  let emailId = 0;
	  if (num > i){
		  for(let scormIndex = 0; scormIndex < num; scormIndex++){
			  emailId = parseInt(ScormProcessGetValue("cmi.interactions." + scormIndex + ".id"));
			  if (emailId == i){
				num = scormIndex;
				break;
			  }
		  }
	  }
   
    if(numOfWeek != 1 && numOfWeek != 5 && numOfWeek != 6 && numOfWeek != 7 && numOfWeek != 8 && EmailText.at(i).open == false)
      Event1(props, i);
                //   if(i == 0)
                //   {
                //      props.setNotify("home");
                //    if(isLocalSession){
                // 	   lacalCompletionStatus = "incomplete";
                //    }
                //    else{
                // 	   ScormProcessSetValue("cmi.completion_status", "incomplete")};
                //     //  indice = 2;
                //   }
    if( EmailText.at(i).open != true){
      ScormProcessSetValue("cmi.interactions." + num + ".id", i);
      ScormProcessSetValue("cmi.interactions." + num + ".type", "true-false");
      ScormProcessSetValue("cmi.interactions." + num + ".learner_response", "true");
    }
    // if(indice == 0 && EmailText.at(i).open == false)
    // {
    //  indice = 1;
    //  props.setTestSection(true);
    // }  
    EmailText.at(i).open = true;
	  props.setEmailCount(emailLen());
   setState(!state);
 }

 React.useEffect(() => {

  },[state]);

      return(
        <> 
		      <Box sx={{ width: '100%', maxWidth:'100rem', bgcolor: '#003a7091', boxShadow: '0 0 4px 4px rgba(255, 255, 255, 0.518)', color: 'white'}}>
            {EmailText.map((emailText, i) => ( emailText.display == true &&
              <List className="boxInbox" key={i} sx={{bgcolor: emailText.open ? '#001e3a91' : '#003a7091', padding: 0}}>
                <ListItemButton role={undefined} data-toggle="modal" data-target={"#exampleModalCenter" + i} onClick={(e) => handleClick(i, e)} dense >
                  <ListItemIcon sx={{minWidth: '1.5rem'}} >
				  	      <Avatar edge="start" {...stringAvatar(emailText.mittente, false)} sx={{ width: 30, height: 30, backgroundColor: stringToColor(emailText.mittente) }}></Avatar>
                  </ListItemIcon>
                  <ListItemText primary={<h5 className="multi-line-2">{emailText.mittente}</h5>} secondary={<span className="multi-line-3">{emailText.email}</span>} sx={{ width: '90%'}} />
                  <IconButton  edge="end" aria-label="comments" sx={{color: 'white'}} type="button" className="btn btn-dark"><i className={emailText.open ? "bi bi-envelope-open" : "bi bi-envelope"}></i></IconButton>
                </ListItemButton>
                {i < emailLength - 1 && (<Divider className="whiteText " component="li" />)}
              </List>
            ))}
          </Box>
        </>
      )
    })