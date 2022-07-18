
let numQuestion = 0; // question number
let scoretotal = 0;  //The total score the user earns with correct answers.  
let attempts = 0; //Number of attempts taken per quiz item. 
let callSucceededData; //SCORM call back variable for data that has been submitted to the LMS.
let callSucceededSave;  //SCORM call back for if it saved properly. 
let callSucceededQuit; //SCORM call back for quitting the application.
let n = 0;
let f = 0;
// let callSucceededCheck = false; //SCORM call back for initial access
let startTimeStamp = null;
let bol = false;
// let isEnd;
// let nidx;

// DEVELOP ONLY
let isLocalSession = false;
let lacalCompletionStatus = null;
let localSuccessStatus = null;
// DEVELOP ONLY



let loc = location.pathname;
let locPath = location.pathname;
// loc =  "/courses/sconeID/scone_prod.sha256_3d23c9b157d6087b22d05fad2d8aeb8f2f721dadcf9eba3c0fcbe8aac8ba9502/0/index.html"
loc = loc.replace("index.html", "")

let index;
let indice = 0;
const {
  colors,
  CssBaseline,
  ThemeProvider,
  Typography,
  Container,
  createTheme,
  Button,
  Box,
  Divider,
  SvgIcon,
  Slider,
  Tooltip,
  styled,
  SliderThumb,
  valueLabelFormat,
  calculateValue,
  value,
  useSnackbar,
  Snackbar,
  Alert,
  SnackbarProvider,
  Slide,
  IconsMaterial,
  Stack,
  Item,
  Badge,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Paper,
  Avatar,
  Grid,
  styles,
  Chip,
  GlobalStyles,
  List,
  ListItem,
  ListItemButton,
  IconButton,
  CommentIcon,
  ListItemIcon,
  Checkbox,
  ListItemText,
  MarkAsUnreadIcon,
  Icon,
  Tab,
  Tabs,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
  Drawer,
  AppBar,
  ToolBar,
  Menu,
  ChevronLeft,
  ChevronRight,
  MoveToInbox,
  Mail,
  SpeedDial,
  Backdrop,
  SpeedDialIcon,
  SpeedDialAction,
  TextareaAutosize,
  StaticTimePicker,
  LocalizationProvider,
  AdapterDateFns
} = MaterialUI;


const theme = createTheme({
	typography: {
	  divider:{
		height: '1000px',
	  }
	},
  
	status: {
	  danger: '#e53e3e',
	},
	palette: {
	  primary: {
		main: '#ffffff',
		darker: '#053e85',
	  },
	  neutral: {
		main: '#64748B',
		contrastText: '#fff',
	  },
	},
  });

  const marks = [
	{
	  value: 1,
	  label: 'Totally disagree'
	},
	{
	  value: 2,
	  label: ''
	},
	{
	  value: 3,
	  label: ''
	},
	{
	  value: 4,
	  label: 'Neutral'
	},
	{
	  value: 5,
	  label: ''
	},
	{
	  value: 6,
	  label: ''
	},
	{
	  value: 7,
	  label: 'Totally agree'
	},

  ];
  
  function valuetext(value) {
	return `${value}`;
  }
  
  
  
const App = () => 
{
	let browserVersion = navigator.userAgent;
	let version = parseFloat(browserVersion.slice(browserVersion.search("Version") + 8, browserVersion.search("Version") + 12));
	// if(version < 15.4)
	// {
	// 	return(
	// 		<>
	// 		<h1>Version not supported</h1>
	// 		<img src="media/BrowserVersion.png" className="versionWrong"></img>
	// 		</>
	// 	)
	// }
	const [callSucceeded, setCallSucceeded] = React.useState(false);
	const isLocalhost = location.hostname == "127.0.0.1" || location.hostname == "localhost" ? true : false;
	if (!callSucceeded)
	{
	// CreateIncludeWeek(2);
		if(!isLocalhost)
		ScormProcessInitialize(); //initializes the scorm.
	isLocalSession = ScormProcessGetValue("cmi.launch_data");
	isLocalSession = isLocalSession == undefined ? true : false; // dev_mode
	setCallSucceeded(true);
	if(isLocalSession){
		lacalCompletionStatus = "unknown"
		localSuccessStatus = "unknown";
	}
	else if(ScormProcessGetValue("success_status") != "passed"){
		ScormProcessSetValue("cmi.success_status", "unknown")
	}
		
	}
	startTimeStamp = new Date();
	window.onbeforeunload = () => {
		doExit();
	}
	return(
		<>
			<Email/>
			<Home/>
		</>
	)
}



const Home = () => {
	
	const Route = ReactRouterDOM.Route;
	const Router = window.ReactRouterDOM.BrowserRouter;
	let interactionCount = 0;

	if(ScormProcessGetValue("cmi.interactions._count"))
		interactionCount = ScormProcessGetValue("cmi.interactions._count");

	const [emailCount, setEmailCount] = React.useState(emailLen());
	const [testSection, setTestSection] = React.useState(
		ScormProcessGetValue("cmi.completion_status") == "completed" 
			&& ScormProcessGetValue("cmi.success_status") == "passed" ? true : false);
	const [notify, setNotify] = React.useState("");	

	const handleClick = () => {
	  const side = document.getElementById('sidebar');
	  
	  let active = side.getAttribute("class");
	  if(active !== "active")
     	side.setAttribute("class", "active")
	  else
      	side.setAttribute("class", " ");
	};

	const deactivate = React.useRef();
	return(
		<>
	  <Router>
		<div className="wrapper">
		<Nav emailCount={emailCount} testSection={testSection} notify={notify} setNotify={setNotify} deactivate={deactivate}/>
		<div id="content">
			<Grid className="container-fluid" container sx={{width: '100%', zIndex: 100, textAlign: 'center', color: 'white'}} justifyContent="space-between">
				<button onClick={handleClick} type="button" id="sidebarCollapse" className="btn btn-info">
					<i className="fas fa-align-left"></i> Menu
				</button>
				<Clock/>
			</Grid>
			<main id="main" className="main container col-md-9 ml-sm-auto col-lg-10 px-4 d-flex justify-content-between flex-wrap flex-nowrap align-items-center pt-3 pb-2 mb-3">
				<Route path={`${locPath}`} exact component={() => <Dashboard setNotify={setNotify} notify={notify} setTestSection={setTestSection} setEmailCount={setEmailCount}/>}/>
				<Route path={`${loc}profile`} component={Profile} />
				<Route path={`${loc}inbox`} component={() => <Inbox setEmailCount={setEmailCount} setTestSection={setTestSection} setNotify={setNotify}/>} />
				<Route path={`${loc}contacts`} component={() => <Begin setNotify={setNotify} setTestSection={setTestSection} setEmailCount={setEmailCount} deactivate={deactivate}/>} />
				<Route path={`${loc}library`} component={() => <Library setNotify={setNotify}/>} />
				<Route path={`${loc}test`} component={() => <Test setEmailCount={setEmailCount} setTestSection={setTestSection} setNotify={setNotify}/>} />
			</main>
			</div>
		</div>
	</Router>
</>)}

const Clock = () => {
	let myVar = setInterval(function() {
		myTimer();
	  }, 1000);
	  
	  function myTimer() {
		let d = new Date();
		document.getElementById("clock").innerHTML = d.toLocaleTimeString().slice(0, 5);
	  }
	return (
		<h4 id="clock"></h4>
	)
}

// function CreateIncludeWeek(i){
// 	let my_awesome_script = document.createElement('script');
// 	my_awesome_script.setAttribute('src', weeks.at(i).fileOrder);
// 	document.head.appendChild(my_awesome_script); //fare tutti gli include che servono
// }



ReactDOM.render(
  <App/>,
  document.getElementById('mainNew')
);