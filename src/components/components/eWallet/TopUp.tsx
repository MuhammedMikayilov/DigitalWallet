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
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import Cards from './Cards';
import AddCard from './AddCard';
import { useHistory } from 'react-router';
import { Avatar, FormControl, ListItemAvatar, TextField } from '@material-ui/core';

const drawerWidth = 240;

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
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
        drawerPaper: {
            width: drawerWidth,
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }),
);

interface Props {
    window?: () => Window;
}

export default function Home(props: Props) {
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
                    <ListItemText onClick={() => history.push('/')} primary='Home' />
                </ListItem>
                <ListItem button key={2}>
                    <ListItemIcon><InboxIcon /></ListItemIcon>
                    <ListItemText onClick={() => history.push('/cards')} primary='Cards' />
                </ListItem>
                <ListItem button key={3}>
                    <ListItemIcon><MailIcon /></ListItemIcon>
                    <ListItemText onClick={() => history.push('/addCard')} primary='Add Card' />
                </ListItem>
                <ListItem button key={4}>
                    <ListItemIcon><InboxIcon /></ListItemIcon>
                    <ListItemText onClick={() => history.push('/TopUp')} primary='TopUp' />
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
                <Typography paragraph style={{ width: '30vw', backgroundColor: 'White', padding: '60px 0' }}>
                    <form>
                    <FormControl className={classes.formControl} style={{ marginLeft: '8vw' }}>
                        <InputLabel id="demo-simple-select-label">Select Card</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            style={{ width: '16vw' }}
                        >
                            <MenuItem value={10}>Paşa Bank</MenuItem>
                            <MenuItem value={20}>Kapital Bank</MenuItem>
                            <MenuItem value={30}>Miri Bank</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl} style={{ marginLeft: '8vw' }}>
                        <InputLabel id="demo-simple-select-label">Select Currency</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            style={{ width: '16vw' }}
                        >
                            <MenuItem value={10}>Azn</MenuItem>
                            <MenuItem value={20}>Usd</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl} style={{ marginLeft: '8vw' }}>
                        <TextField type="number" placeholder="Amount" />
                    </FormControl>
                    <Button variant="contained" color="primary">
                        Primary
                    </Button>
                    </form>
                </Typography>
            </main>
        </div>
    );
}



