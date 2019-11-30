import React from 'react';
import Carousel from 'nuka-carousel';

function CarouselView(props) {
	console.log(props.images);
	return (
		<Carousel>
			<img src={props.images} alt="ProductImage" />
		</Carousel>
	);
}

export default CarouselView;
