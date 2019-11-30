import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Paper, Divider } from '@material-ui/core';
import CarouselView from './subComponents/carousel';
import Typography from '@material-ui/core/Typography';
import CustomizedExpansionPanels from './subComponents/expantionList';
import DatePicker from './microcomponents/datePicker';
import ProductCard from './microcomponents/productsItem';
import IconBreadcrumbs from './microcomponents/breadCrums';
import ProfileMenu from './subComponents/profileMenu';

class Profile extends React.Component {
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
				<Grid item sm={3}>
					<ProfileMenu />
				</Grid>
				<Grid item sm={9} />
			</Grid>
		);
	}
}

export default Profile;
