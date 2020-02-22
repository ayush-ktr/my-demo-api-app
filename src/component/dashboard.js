import React, { Component } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { mainListItems } from './listItems';
import 'react-chatbox-component/dist/style.css';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import Dash from './Dash';
import ChatWindow from './ChatWindow';
import Bot from './bot.svg';
import { connect } from 'react-redux';
import * as chatBotActions from '../actions/index';
import { bindActionCreators } from 'redux';
import ChatBot from './ChatBot';

const drawerWidth = 240;

const styles = theme => ({
	root: {
		display: 'flex',
		overflowX: 'hidden',
		flexGrow: 1,
		textDecoration: 'none'
	},
	toolbar: {
		paddingRight: 24 // keep right padding when drawer closed
	},
	toolbarIcon: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: '0 8px',
		...theme.mixins.toolbar
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		position: 'fixed'
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	appBarShiftChatBox: {
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		}),
		marginRight: drawerWidth
	},
	menuButton: {
		marginRight: 36,
		outlineWidth: '0px !important',
		'&:focus': {
			outlineWidth: '0px',
			textDecoration: 'none'
		}
	},
	menuButtonHidden: {
		display: 'none'
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		...theme.mixins.toolbar,
		justifyContent: 'flex-start'
	},
	title: {
		flexGrow: 1
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0
	},
	drawerPaper: {
		position: 'relative',
		width: '200px',
		whiteSpace: 'nowrap',
		width: drawerWidth,
		overflow: 'hidden',
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		}),
		height: '100vh'
	},
	drawerPaperClose: {
		overflowX: 'hidden',
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		width: theme.spacing(7),
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing(9)
		}
	},
	appBarSpacer: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		height: '100vh',
		overflow: 'auto'
	},
	contentChatBox: {
		flexGrow: 1,
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		marginRight: -drawerWidth
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		}),
		marginRight: 0
	},
	container: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4),
		minWidth: '75.5vw'
	},
	paper: {
		padding: theme.spacing(2),
		display: 'flex',
		overflow: 'auto',
		flexDirection: 'column'
	},
	fixedHeight: {
		height: 240
	},
	cardStyle: {
		height: '35vh'
	},
	icon: {
		height: '5.5vh'
	}
});

class Dashboard extends Component {
	constructor() {
		super();
		this.state = {
			open: false,
			openChatBox: false
		};
	}

	handleDrawerOpen = () => {
		this.setState({
			open: true,
			openChatBox: false
		});
		this.props.chatBotActions.openDrawer();
	};
	handleDrawerClose = () => {
		this.setState({
			open: false
		});
		this.props.chatBotActions.closeDrawer();
	};

	handleChatBoxDrawerOpen = () => {
		this.setState({
			openChatBox: true,
			open: false
		});
		this.props.chatBotActions.openChatWindow();
	};

	handleChatBoxDrawerClose = () => {
		this.setState({
			openChatBox: false
		});
		this.props.chatBotActions.closeChatWindow();
	};

	render() {
		let { drawerState, drawer, classes } = this.props;
		const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
		let { open } = this.state;
		// console.log(this.props);
		return (
			<div className={classes.root}>
				<CssBaseline />
				<AppBar
					position="absolute"
					className={clsx(
						classes.appBar,
						drawer && classes.appBarShift,
						drawerState && classes.appBarShiftChatBox
					)}
				>
					<Toolbar className={classes.toolbar}>
						<IconButton
							edge="start"
							color="inherit"
							aria-label="open drawer"
							onClick={this.handleDrawerOpen}
							style={{ textDecoration: 'none' }}
							className={clsx(
								classes.menuButton,
								drawer && classes.menuButtonHidden
							)}
						>
							<MenuIcon />
						</IconButton>
						<Typography
							component="h1"
							variant="h6"
							color="inherit"
							noWrap
							className={classes.title}
						>
							{/* Dashboard */}
						</Typography>
						<Typography
							component="h1"
							variant="h6"
							color="inherit"
							noWrap
							className={classes.title}
						>
							{/* Ayush Kumar */}
						</Typography>
						<Typography
							component="h1"
							variant="h6"
							color="inherit"
							noWrap
							className={classes.title}
						>
							{/* Information Technology */}
						</Typography>
						<ChatBot />
						<IconButton
							color="inherit"
							aria-label="open drawer"
							edge="end"
							onClick={this.handleChatBoxDrawerOpen}
							className={clsx(
								drawerState && classes.menuButtonHidden
							)}
						>
							{/* <MenuIcon /> */}
							<span>
								<img src={Bot} className={classes.icon} />
							</span>
						</IconButton>
					</Toolbar>
				</AppBar>
				<Drawer
					variant="permanent"
					classes={{
						paper: clsx(
							classes.drawerPaper,
							!drawer && classes.drawerPaperClose
						)
					}}
					open={drawer}
				>
					<div className={classes.toolbarIcon}>
						<IconButton onClick={this.handleDrawerClose}>
							<ChevronLeftIcon />
						</IconButton>
					</div>
					<Divider />
					<List>{mainListItems}</List>
				</Drawer>
				<main
					className={clsx(
						!drawerState && classes.contentChatBox,
						drawerState && classes.contentShift
					)}
				>
					<div className={classes.appBarSpacer} />
					<Container maxWidth="lg" className={classes.container}>
						{/* <Grid container spacing={3}>
                            <Grid item container
                                xs={12}

                                direction="row"
                                justify="center"
                                alignItems="center">

                                <Grid item xs={12} lg={12} md={12}>
                                    <Card className={classes.cardStyle} >
                                        <CardHeader title='Task Of the Day' />
                                        <CardContent>
                                            hello
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                            <Grid item container xs={12} spacing={3}>
                                <Grid item xs={6}>
                                    <Card className={classes.cardStyle}>
                                        <CardHeader title='Classes Today' />
                                        <CardContent>
                                            hello
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={6}>
                                    <Card className={classes.cardStyle}>
                                        <CardHeader title='Attendance' />
                                        <CardContent>
                                            hello
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid> */}
						<Dash />
					</Container>
				</main>
				<Drawer
					className={classes.drawer}
					variant="persistent"
					anchor="right"
					open={this.props.drawerState}
					classes={{
						paper: classes.drawerPaper
					}}
				>
					<div className={classes.drawerHeader}>
						<IconButton onClick={this.handleChatBoxDrawerClose}>
							<ChevronRightIcon />
						</IconButton>
					</div>
					<Divider />
					{this.props.drawerState?<ChatWindow />:null}
				</Drawer>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		drawerState: state.drawerState,
		drawer: state.drawer
	};
};

const mapDispatchToProps = dispatch => ({
	chatBotActions: bindActionCreators(chatBotActions, dispatch)
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withStyles(styles)(Dashboard));
