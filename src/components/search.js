import React from 'react';
import Grid from '@material-ui/core/Grid';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		console.log('Component is mounted ?');
	}

	render() {
		return (
			<Grid container spacing={5}>
				<Grid item sm={3} />
				<Grid item sm={9} />
			</Grid>
		);
	}
}

export default Search;
