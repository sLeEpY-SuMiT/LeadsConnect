import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Container } from 'react-bootstrap';



function TopSearch() {
	
	
	const myStyle = {
		backgroundImage:"url('img/BG_Image.jpg')",
		height: '60vh',
	};


	return (
		<section style={myStyle} className="pt-5 BG_style pb-5 homepage-search-block position-relative">
			
			<div className="banner-overlay"></div>
			<Container >
				<Row className="d-flex align-items-center">
					
					
				</Row>
			</Container>
			
		</section>
	);
}


const options2 = {
	responsive: {
		0: {
			items: 1,
		},
		764: {
			items: 1,
		},
		765: {
			items: 1,
		},
		1200: {
			items: 1,
		},
	},
	lazyLoad: true,
	loop: true,
	autoplay: true,
	autoplaySpeed: 800,
	dots: false,
	autoplayTimeout: 2000,
	nav: true,
	navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
	autoplayHoverPause: true,
}

export default TopSearch;