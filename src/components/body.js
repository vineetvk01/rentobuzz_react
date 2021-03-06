import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Divider } from '@material-ui/core';
import IconBreadcrumbs from './microcomponents/breadCrums';
import ProductCard from './microcomponents/productsItem';

const products = [
	{
		id: 1,
		name: 'Nikon Camera',
		type: 'Camera',
		category: 'camera',
		rent: '220',
		description: 'This is the camera description. Please check me out',
		image_url: 'https://yougraphy-blog.canvera.com/wp-content/uploads/2018/06/2-1.jpg',
		productUrl: '/product/city'
	},
	{
		id: 2,
		name: 'Cannon Camera',
		type: 'Shooting Camera',
		category: 'camera',
		rent: '220',
		description: 'This is the camera description. Please check me out',
		image_url:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/LEI0440_Leica_IIIf_chrom_-_Sn._580566_1951-52-M39_Blitzsynchron_front_view-6531_hf-.jpg/1200px-LEI0440_Leica_IIIf_chrom_-_Sn._580566_1951-52-M39_Blitzsynchron_front_view-6531_hf-.jpg',
		productUrl: '/product/city'
	},
	{
		id: 3,
		name: 'Mi Camera',
		type: '360 Cam',
		category: 'camera',
		rent: '220',
		description: 'This is the 360 camera for the multipurpose.',
		image_url:
			'http://www.easybasicphotography.com/uploads/8/1/3/6/81363426/editor/nkon-d3400-facing-left.jpg?1485715459',
		productUrl: '/product/city'
	},
	{
		id: 4,
		name: 'Cannon Camera',
		type: 'Shooting Camera',
		category: 'camera',
		rent: '220',
		description: 'This is the camera description. Please check me out',
		image_url:
			'https://images.pexels.com/photos/1787234/pexels-photo-1787234.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		productUrl: '/product/city'
	}
];

class Body extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		console.log('Component is mounted ?');
	}

	render() {
		return (
			<div style={{ margin: '0px 10%' }}>
				<Grid container spacing={4}>
					<Grid item xs={12}>
						<Divider />
						<IconBreadcrumbs />
						<Divider />
					</Grid>
					{products.map((element) => (
						<Grid item xs={3}>
							<ProductCard key={element.id.toString()} item={element} />
						</Grid>
					))}
				</Grid>
			</div>
		);
	}
}

export default Body;
