import React from 'react';
import Carousel from 'nuka-carousel';
import Banner1 from '../../../public/images/banners/banner1.png';
import Banner2 from '../../../public/images/banners/photography.jpg';
import Banner3 from '../../../public/images/banners/wideAngle.jpg';

function CarouselView() {
	return (
		<Carousel>
			<img src={Banner3} width="100vh" height="350vh" alt="image1"/>
			<img src={Banner2} width="100vh" height="350vh" alt="image2"/>
			<img src={Banner1} width="100vh" height="350vh" alt="image3"/>
		</Carousel>
	);
}

export default CarouselView;
