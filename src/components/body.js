import React from 'react';
import Grid from '@material-ui/core/Grid';
import CarouselView from './subComponents/carousel';
import CategoryBox from './subComponents/categoryBox';
import adventure from './../../public/images/categories/adventure.png';
import laptop from './../../public/images/categories/laptop.png';
import camera from './../../public/images/categories/camera.png';

class Body extends React.Component {
	render() {
		return (
			<div className="body">
				<CarouselView />
				<Grid container direction="row" justify="center" alignItems="center" spacing={2}>
					<CategoryBox icon={adventure} categoryName="Adventure" />
					<CategoryBox icon={laptop} categoryName="Business" />
					<CategoryBox icon={camera} categoryName="Cameras" />
				</Grid>
			</div>
		);
	}
}

export default Body;
