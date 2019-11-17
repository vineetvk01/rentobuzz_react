import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class CategoryBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			classes: {
				paperStyle: {
					marginTop: '10px'
				}
			},
			isHovered: false
		};
		this.toggleHover = this.toggleHover.bind(this);
	}

	toggleHover = (e) => {
		this.setState((prevState) => {
			isHovered: !this.state.isHovered;
		});
	};

	render() {
		return (
			<Grid onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} item xs={10} sm={2}>
				<Paper style={this.state.classes.paperStyle}>
					<Typography variant="h5" component="h3">
						<img src={this.props.icon} height="60px" />
					</Typography>
					<Typography component="p">{this.props.categoryName}</Typography>
				</Paper>
			</Grid>
		);
	}
}

export default CategoryBox;
