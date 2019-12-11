import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Typography, Link } from '@material-ui/core';

class CategoryBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			classes: {
				paperStyleHovered: {
					marginTop: '10px',
					border: '1px solid #999',
					boxShadow: '3px 7px 14px rgba(183, 28, 28,0.9)',
					cursor: 'pointer'
				},
				paperStyle: {
					marginTop: '10px',
					border: '1px solid #999',
					cursor: 'pointer'
				}
			},
			isHovered: false
		};
		this.toggleHover = this.toggleHover.bind(this);
	}

	toggleHover = (e) => {
		console.log('Hovered?');
		this.setState((prevState) => ({ isHovered: !prevState.isHovered }));
	};

	render() {
		return (
			<Grid onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} item xs={10} sm={2}>
				<Link href={'/l/' + this.props.city + '/' + this.props.categoryName + '/'}>
					<Paper
						style={
							this.state.isHovered ? this.state.classes.paperStyleHovered : this.state.classes.paperStyle
						}
					>
						<Typography variant="h5" component="h3">
							<img src={this.props.icon} height="60px" alt="Category" />
						</Typography>
						<Typography component="p">{this.props.categoryName}</Typography>
					</Paper>
				</Link>
			</Grid>
		);
	}
}

export default CategoryBox;
