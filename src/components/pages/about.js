import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';

class About extends React.Component {
	constructor() {
		super();
		this.state = {
			style: {
				padding: '40px'
			}
		};
	}
	render() {
		return (
			<div>
				<Grid container style={this.state.style}>
					<Grid item xs={12}>
						<Typography variant="h4" gutterBottom align="left">
							About Us
						</Typography>
						<Divider
							light
							variant="middle"
							style={{ backgroundColor: 'rgba(183, 28, 28,0.9)', width: '40%', height: '5px' }}
						/>
					</Grid>
					<Grid item xs={12}>
						<Typography align="left" variant="body1" gutterBottom style={this.state.style}>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde
							suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
							dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam. Lorem ipsum dolor sit amet,
							consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum
							inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat
							deleniti? Eum quasi quidem quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque
							doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem
							quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
							unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
							dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam. Lorem ipsum dolor sit amet,
							consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum
							inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat
							deleniti? Eum quasi quidem quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque
							doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem
							quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
							unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
							dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
						</Typography>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default About;
