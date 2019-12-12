import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(3, 2),
		marginTop: '2%'
	}
}));

export default function ProfileNotification(props) {
	const classes = useStyles();

	return (
		<Paper className={classes.root}>
			<Typography variant="h6" component="h3" align="left">
				{props.title}
			</Typography>
			<Typography component="p" align="left">
				{props.message}
			</Typography>
		</Paper>
	);
}
