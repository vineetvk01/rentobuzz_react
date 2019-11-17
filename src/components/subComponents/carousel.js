import React from 'react';
import Carousel from 'nuka-carousel';
import Banner1 from '../../../public/images/banners/banner1.png';
import Banner2 from '../../../public/images/banners/photography.jpg';
import Banner3 from '../../../public/images/banners/wideAngle.jpg';

function CarouselView() {
	return (
		<Carousel>
			<img src={Banner3} width="100vh" height="350vh" />
			<img src={Banner2} width="100vh" height="350vh" />
			<img src={Banner1} width="100vh" height="350vh" />
		</Carousel>
	);
}

export default CarouselView;
