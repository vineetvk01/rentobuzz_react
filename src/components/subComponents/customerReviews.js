import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { Grid } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
	card: {
		maxWidth: 345
	},
	media: {
		height: 140
	},
	avatar: {
		margin: 10
	}
});

export default function CustomerReview() {
	const classes = useStyles();

	return (
		<Card className={classes.card}>
			<CardActionArea>
				<CardContent>
					<Grid container justify="left" alignItems="center">
						<Avatar className={classes.avatar}>L</Avatar>
						<Typography gutterBottom variant="h5" component="h2">
							Lucifer Morningstar
						</Typography>
					</Grid>
					<Typography align="left" variant="body2" color="textSecondary" component="p">
						Rentobuzz has one of the finest camera's. I really love the varities they provide.
					</Typography>
					<Box component="fieldset" mb={3} borderColor="transparent">
						<Rating name="read-only" value="4" readOnly />
					</Box>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
