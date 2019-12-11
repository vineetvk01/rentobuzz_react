import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	card: {
		maxWidth: 345
	}
});

export default function ProductCard(props) {
	const classes = useStyles();

	return (
		<Card className={classes.card}>
			<CardActionArea>
				<div style={{ padding: '2%' }}>
					<CardMedia
						component="img"
						alt="Camera"
						height="150px"
						image={props.item.image_url}
						title="Camera"
					/>
				</div>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{props.item.name}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{props.item.description}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions style={{ justifyContent: 'flex-end' }}>
				<Button href="/l/Bangalore/Camera/keywuwduieuie" size="small" color="primary" variant="outlined">
					Rent @ {props.item.rent} /day
				</Button>
			</CardActions>
		</Card>
	);
}
