import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles({
	bigAvatar: {
		margin: 10,
		width: 60,
		height: 60
	}
});

export default function FromToDate(props) {
	const classes = useStyles();
	return (
		<Paper className={classes.root}>
			<Grid container justify="center" alignItems="center">
				<Grid item xs={5}>
					<Typography variant="caption" component="h3">
						Pickup Date
					</Typography>
					<Typography variant="h6" component="h3">
						{props.fromDate}
					</Typography>
					<Typography variant="button" component="h3">
						{props.fromMonth}
					</Typography>
				</Grid>
				<Grid item xs={1}>
					<Typography variant="h3" component="h3">
						<ChevronRightIcon />
					</Typography>
				</Grid>
				<Grid item xs={6}>
					<Typography variant="caption" component="h3">
						Drop-Off Date
					</Typography>
					<Typography variant="h6" component="h3">
						{props.toDate}
					</Typography>
					<Typography variant="button" component="h3">
						{props.toMonth}
					</Typography>
				</Grid>
			</Grid>
		</Paper>
	);
}
