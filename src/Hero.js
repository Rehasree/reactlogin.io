import React from 'react';
import clsx from 'clsx';
import fire from './fire'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import FeedbackOutlinedIcon from '@material-ui/icons/FeedbackOutlined';
import InsertChartOutlinedSharpIcon from '@material-ui/icons/InsertChartOutlinedSharp';
import Button from '@material-ui/core/Button';
import StreetviewOutlinedIco from '@material-ui/icons/FeedbackOutlined';
import { shadows } from '@material-ui/system';
import { Link } from '@material-ui/core';
import AddingMembers from './components/AddingMembers';
const drawerWidth = 350;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
  //  marginRight: 36,
  padding:'0px',
  margin:'0px',
  width:'35px',
  height:'35px',
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
 
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  
}));

export default function Sidenav() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleLogout=()=>{
    fire 
    .auth().signOut();
  };
  const handleDrawerClose = () => {
    setOpen(false);  
  };
  const redirectAnotherpage=()=>{
      
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Dashboard
          </Typography>
          <IconButton color="inherit" style={{padding:'0px',margin:'0px',width:'50px'}}>
          <Badge color="secondary">
           <p onClick={handleLogout}>logout</p>
          </Badge>
        </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List className="row">
        // <InsertChartOutlinedSharpIcon className="col"  className={classes.toolbarIcon} style={{fontSize:'70px'}} /><h3 className="col"  style={{paddingTop:'20px', /*display:setOpen(true)? 'block':'none'*/}}>Traffic Analysis</h3></List>
        <Divider />
        <List className="row">
        <h3 className="col" style={{paddingTop:'20px'}}>Social Studio</h3></List>
        <Divider />
        <List className="row">
        <h3 className="col" style={{paddingTop:'20px'}}>News Letter</h3></List>
        <Divider />
        <List className="row">
        <h3 className="col" style={{paddingTop:'20px',}}>Leads</h3></List>
        <Divider />
        <List className="row">
        <h3 className="col" style={{paddingTop:'20px'}}>Landing page</h3></List>
        <Divider />
        <List className="row">
        <h3 className="col" style={{paddingTop:'20px'}}>CRM</h3></List>
        <div className={classes.toolbarIcon}>
        
      </div>
        </Drawer>
      
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="xl" className={classes.container}>
          <h1><u><b>Client Company Name</b></u></h1>
          
          <Button onClick={AddingMembers} style={{width:'50%',height:'200px',marginTop:'200px',alignContent:'center',alignSelf:'center',marginLeft:'300px'}}  variant="contained" >
            <Link ><h1 >Add Competitors</h1></Link>
          </Button>
          
        </Container>
      </main>
    </div>
  );
}