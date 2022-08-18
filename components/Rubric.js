function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            {children}
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }
  
  function VerticalTabs(props) {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };


	const main = document.getElementById('main');
	main.style.height = "auto";
    return (
      <Box sx={{display: 'flex', bgcolor: '#003a7091', display: 'flex', height: 'auto', maxWidth: '80vh', minHeight: '55vh', boxShadow: '0 0 4px 4px rgba(255, 255, 255, 0.518)' }}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          sx={{ borderRight: 1, borderColor: 'white', height: 'auto', width: '10.5vh', minWidth: 'max-content'}}
        >
          {phoneBook.map((contact, i) => (
          <Tab className={phoneBook.at(i).real == true ? "notify contactList" : "contactList"} key={i} sx={{color: 'white', alignItems: 'flex-end', textAlign:'end', padding: '7px 7px', border: 0.5, borderColor: 'black'}} label={contact.nome} {...a11yProps(i)} />
          ))}
        </Tabs>
        {phoneBook.map((contact, i) => (
          <TabPanel key={i} value={value} index={i}>
            <MultiActionAreaCard props={props} index={i}/>
          </TabPanel>
        ))}
      </Box>
    );
  }

  function MultiActionAreaCard(props) {
    const [imgPath, setImgPath] = React.useState("media/avatar.png")
  
    if(imgPath == "media/avatar.png")
    {checkIfImageExists(phoneBook.at(props.index).img, (exists) => {
    if (exists) {
      setImgPath(phoneBook.at(props.index).img)
    }
    });}
    return (
      <Card sx={{bgcolor: 'transparent', textAlign: 'center', minHeight: '50vh'}}>
          <CardMedia
            component="img"
			      sx={{ height: 'auto'}}
            image={imgPath}
            alt={phoneBook.at(props.index).nome}
            />          
          <CardContent sx={{color: 'white', minHeight: '10vh'}}>
            <Typography gutterBottom variant="h5" component="div">
			          {phoneBook.at(props.index).nome}
            </Typography>
            <Typography variant="body2" color="white" sx={{textAlign: 'center'}}>
			          {phoneBook.at(props.index).text}
            </Typography>
          </CardContent>
        <CardActions sx={{justifyContent: 'space-around'}}>
			    <Button sx={{color: '#7dcf03', borderColor: '#99ff00'}} variant="outlined" color="success" onClick={() => {props.props.props.setWho(props.index),phoneBook.at(props.index).real == false ? props.props.props.setX("fake") : phoneBook.at(props.index).type == "video" ? props.props.props.setX("realVideo") : phoneBook.at(props.index).type == "scales" ? props.props.props.setX("realScales") : props.props.props.setX("realInterview")}}>Call</Button>
        </CardActions>
      </Card>
    );
  }

const Rubric = React.memo((props) => {
	return(
		<VerticalTabs props={props}/>
		)
  })
