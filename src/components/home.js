import React from 'react';
import Grid from '@material-ui/core/Grid';
import HeaderImage from './subComponents/headerImage';
import CategoryBox from './subComponents/categoryBox';
import adventure from './../../public/images/categories/adventure.png';
import laptop from './../../public/images/categories/laptop.png';
import camera from './../../public/images/categories/camera.png';
import { Typography, Link } from '@material-ui/core';
import ProductView from './subComponents/productView';
import CustomerReview from './subComponents/customerReviews';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';

class Home extends React.Component {
	render() {
		return (
			<div className="body">
				<HeaderImage />
				<Grid container direction="row" justify="center" alignItems="center" spacing={2}>
					<CategoryBox icon={adventure} categoryName="Adventure" city="bangalore" />
					<CategoryBox icon={laptop} categoryName="Business" city="bangalore" />
					<CategoryBox icon={camera} categoryName="Cameras" city="bangalore" />
				</Grid>
				<br />

				<Typography variant="caption">
					Now rent with us in <b>Bangalore</b>
				</Typography>
				<Grid container spacing={2} style={{ marginTop: '30px' }}>
					<Grid item sm={4} xs={12}>
						<Typography variant="h5" align="left" style={{ marginTop: '10px', marginLeft: '60px' }}>
							Trending in
						</Typography>
						<Typography variant="h3" align="left" style={{ marginTop: '0px', marginLeft: '40px' }}>
							Bangalore <TrendingUpIcon style={{ color: 'rgba(183, 28, 28,0.9)', fontSize: '40px' }} />
						</Typography>
					</Grid>
					<Grid item xs={2}>
						<ProductView />
					</Grid>
					<Grid item xs={2}>
						<ProductView />
					</Grid>
					<Grid item xs={2}>
						<ProductView />
					</Grid>
					<Grid item xs={2}>
						<ProductView />
					</Grid>
				</Grid>

				<Grid container spacing={2} style={{ marginTop: '30px' }}>
					<Grid item sm={4} xs={12}>
						<Typography variant="h5" align="left" style={{ marginTop: '10px', marginLeft: '60px' }}>
							Reviews By
						</Typography>
						<Typography variant="h3" align="left" style={{ marginTop: '0px', marginLeft: '40px' }}>
							Customers
							<SentimentVerySatisfiedIcon style={{ color: 'rgba(183, 28, 28,0.9)', fontSize: '40px' }} />
						</Typography>
					</Grid>
					<Grid item xs={4}>
						<CustomerReview />
					</Grid>
					<Grid item xs={4}>
						<CustomerReview />
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default Home;
