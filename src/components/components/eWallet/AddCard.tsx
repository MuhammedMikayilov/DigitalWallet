import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import ImageIcon from '@material-ui/icons/Image';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
// import { useHistory } from "react-router-dom";
import Cards from './Cards';
import { useHistory } from 'react-router';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Avatar, Input, ListItemAvatar, TextField } from '@material-ui/core';

const drawerWidth = 240;

const SignupSchema = Yup.object().shape({
  cardNumber: Yup.number()
    .min(18, 'Card number must be 16 digits!')
    .max(18, 'Card number must be 16 digits!')
    .required('Required'),
  expireDate: Yup.string()
    .required('Required'),
    cvv: Yup.number()
    .min(3, 'CVV must be 3 digits!')
    .max(3, 'CVV must be 3 digits!')
    .required('Required'),
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);

interface Props {
  window?: () => Window;
}

export default function AddCard(props: Props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const history = useHistory();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  console.log(history);
  
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
      <ListItem button key={1}>
            <ListItemIcon></ListItemIcon>
            <ListItemText onClick={()=>history.push('/')} primary='Home' />
          </ListItem>
        <ListItem button key={2}>
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText onClick={()=>history.push('/cards')} primary='Cards' />
          </ListItem>
        <ListItem button key={3}>
            <ListItemIcon><MailIcon /></ListItemIcon>
            <ListItemText onClick={()=>history.push('/addCard')} primary='Add Card' />
          </ListItem>
        <ListItem button key={4}>
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary='TopUp' />
          </ListItem>
        <ListItem button key={5}>
            <ListItemIcon><MailIcon /></ListItemIcon>
            <ListItemText primary='Post' />
          </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Digital Wallet 
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
        <div>
     <h1>Add a new card</h1>
     <Formik
       initialValues={{
         cardNumber: '',
         expireDate: '',
         cvv: '',
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
         console.log(values);
       }}
     >
       {({ errors, touched }) => (
         <form>
           <TextField name="cardNumber" InputProps={{ inputProps: { max: 16 } }}/>
           {errors.cardNumber && touched.cardNumber ? (
             <div>{errors.cardNumber}</div>
           ) : null}
           <TextField name="expireDate" type="date"/>
           {errors.expireDate && touched.expireDate ? (
             <div>{errors.expireDate}</div>
           ) : null}
           <Input name="cvv" type="number"/>
           {errors.cvv && touched.cvv ? <div>{errors.cvv}</div> : null}
           <button type="submit">Submit</button>
         </form>
       )}
     </Formik>
   </div>
        
        </Typography>
      </main>
    </div>
  );
}





 

 
