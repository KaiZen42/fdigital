const Nav = (props) => {
	const Link = ReactRouterDOM.NavLink;

	const handleNotify = (e, str) => {
		if (props.notify == "library")
			props.setNotify("rubrica")
		if(props.notify == str && props.notify != "library")
			props.setNotify("");
	}
  return(
  <>
  {props.notify == "inbox" && <Notify/>}
  <nav ref={props.deactivate} style={{pointerEvents: '', color: ''}}  id="sidebar" className={window.screen.width.valueOf() <= 390 ? "" : "active"} >
			<div className="sidebar-header">
			<h3>LuissWeb</h3>
			<img src="media/colonna.png"></img>
			</div>
			<ul className="list-unstyled components" data-toggle="tooltip" data-placement="right" title={props.deactivate ? "Not available, finish the call" : ""}>
				<li className={props.notify == "home" ? "notify" : ""} onClick={(e) => handleNotify(e, "home")}>
					<Link exact to={`${locPath}`} className="nav-link"><i className="bi bi-house-fill"></i>HOME</Link> 
				</li>
				<li className={props.notify == "profile" ? "notify" : ""} onClick={(e) => handleNotify(e, "profile")}>
					<Link to={`${loc}profile`} className="nav-link"><i className="bi bi-person-fill"></i>Profile</Link>
				</li>
				<li className={props.notify == "inbox" ? "notify" : ""} onClick={(e) => handleNotify(e, "inbox")}>
					<Link to={`${loc}inbox`} className="nav-link">
						<Badge badgeContent={props.emailCount} anchorOrigin={{vertical: 'top',horizontal: 'left',}} color="primary">
							<i className="bi bi-chat-dots-fill"></i>
						</Badge>
					Inbox
					</Link>
				</li>
				<li className={props.notify == "rubrica" ? "notify" : ""} onClick={(e) => handleNotify(e, "rubrica")}>
				<Link to={`${loc}contacts`} className="nav-link"><i className="bi bi-person-video2"></i>Contacts</Link>
				</li>
				<li className={props.notify == "library" ? "notify" : ""} onClick={(e) => handleNotify(e, "library")}>
				<Link to={`${loc}library`} className="nav-link"><i className="bi bi-collection-fill"></i>Library</Link>
				</li>
				<li data-toggle="tooltip" data-placement="right" title={!props.testSection ? "Not available" : ""} className={props.notify == "test" ? "notify" : ""} onClick={(e) => handleNotify(e, "test")}>
				<Link style={{pointerEvents: props.testSection ? '' : 'none', color: props.testSection ? '' : 'darkGrey'}} to={`${loc}test`} className="nav-link"><i className="bi bi-card-checklist"></i>Test</Link>
				</li>
			</ul>
			<Button className="notify" style={{display: (lacalCompletionStatus == "completed" && localSuccessStatus == "passed") || (ScormProcessGetValue("cmi.completion_status") == "completed" && ScormProcessGetValue("cmi.success_status") == "passed") ? "" : "none"}} sx={{color: 'white'}} onClick={() => doExit()}><a className="nav-link"><i className="bi bi-box-arrow-left"></i>Exit</a></Button>
		</nav>
</>)}