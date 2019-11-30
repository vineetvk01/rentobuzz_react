import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import { Divider } from '@material-ui/core';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import HelpIcon from '@material-ui/icons/Help';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper
	},
	nested: {
		paddingLeft: theme.spacing(4)
	}
}));

export default function ProfileMenu() {
	const classes = useStyles();
	const [ open, setOpen ] = React.useState(true);

	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<div style={{ margin: '5%' }}>
			<List
				component="nav"
				aria-labelledby="nested-list-subheader"
				subheader={
					<ListSubheader component="div" id="nested-list-subheader">
						Welcome, Lokender Singh
					</ListSubheader>
				}
				className={classes.root}
			>
				<ListItem button>
					<ListItemIcon>
						<PermIdentityIcon />
					</ListItemIcon>
					<ListItemText primary="Profile" />
				</ListItem>
				<ListItem button>
					<ListItemIcon>
						<ShoppingCartIcon />
					</ListItemIcon>
					<ListItemText primary="Cart" />
				</ListItem>
				<ListItem button>
					<ListItemIcon>
						<ShoppingBasketIcon />
					</ListItemIcon>
					<ListItemText primary="Previous Order" />
				</ListItem>
				<ListItem button>
					<ListItemIcon>
						<NotificationsActiveIcon />
					</ListItemIcon>
					<ListItemText primary="Notifications" />
				</ListItem>
				<ListItem button>
					<ListItemIcon>
						<HelpIcon />
					</ListItemIcon>
					<ListItemText primary="Reach Us" />
				</ListItem>
				<Divider />
				<ListItem button>
					<ListItemIcon>
						<ExitToAppIcon />
					</ListItemIcon>
					<ListItemText primary="Logout Now" />
				</ListItem>
			</List>
		</div>
	);
}
