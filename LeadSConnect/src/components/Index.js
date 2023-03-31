import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';
import TopSearch from './home/TopSearch';
import CardItem from './common/CardItem';

import BuyNow from './BuyNow';
import React, { useContext, useState, useEffect } from 'react';
import Nutrition from './Nutrition';
import { GlobalContext } from './GlobalState';




function Index() {

	const { Products, setProducts } = useContext(GlobalContext)

	const GetAllProducts = () => {
		var requestOptions = {
			method: 'GET',
			redirect: 'follow'
		};

		fetch("https://fakestoreapi.com/products", requestOptions)
			.then(response => response.json())
			.then(result => {
				setProducts(result)
			})
			.catch(error => console.log('error', error));
	}

	useEffect(() => {
		GetAllProducts()
	}, [])

	
	const getStarValue = ({ value }) => {
		console.log(value);
		//console.log(quantity);
	}
	const getQty = ({ id, quantity }) => {
		//console.log(id);
		//console.log(quantity); 
	}





	return (
		<>
			<GlobalContext.Consumer>
				{(state) => (
					<div>
						<TopSearch />


						<div >
							<section className="section pt-5 pb-5 mt-3 products-section" >
								<Container>
									<div className={`section-header `}>
										<div >
											<h4>Shop by Categories</h4>
										</div>
									</div>

									<Row>
										<Col md={4} lg={3} sm={12} className="D-Categories">
											<img src="https://nourishstore.co.in/wp-content/uploads/2022/03/25-02-2022-SHOP-BY-CATEGORIES-371-x-127-72-Flours.webp" />
										</Col>

										<Col md={4} lg={3} sm={12} className="D-Categories">
											<img src="https://nourishstore.co.in/wp-content/uploads/2022/03/25-02-2022-SHOP-BY-CATEGORIES-371-x-127-72-Flours.webp" />
										</Col>

										<Col md={4} lg={3} sm={12} className="D-Categories">
											<img src="https://nourishstore.co.in/wp-content/uploads/2022/03/25-02-2022-SHOP-BY-CATEGORIES-371-x-127-72-Flours.webp" />
										</Col>

										<Col md={4} lg={3} sm={12} className="D-Categories">
											<img src="https://nourishstore.co.in/wp-content/uploads/2022/03/25-02-2022-SHOP-BY-CATEGORIES-371-x-127-72-Flours.webp" />
										</Col>
									</Row>

								</Container>
							</section>

							<section className="section pt-5 pb-5 mt-3 products-section">
								<Container>
									<hr></hr>
									<div className={`section-header `}>
										<div className='text-center'>
											<h5><span className='border pl-4 pr-4 pt-2 pb-2 D-deal	' >Deal of The Day</span></h5>
										</div>
									</div>
									<Row>
										<Col md={12} >
											<OwlCarousel nav loop {...options} className="owl-carousel-four owl-theme">

												{(Products?.map((Products, Index) =>
													<div className="item">
														{/* {Spotlight.prices.length>1?'': */}


														<CardItem
															id={Products.id}
															title={Products.title}
															// subTitle='North Indian • American • Pure veg'
															imageAlt={Products.image}
															image={Products.image}
															imageClass='BTS item-img'
															// linkUrl='detail'
															// offerText='65% off | Use Coupon sumit50'
															// time='20–25 min'
															price={Products.price}
															// discountprice={Products.discountprice}
															priceUnit='₹ '
															// showPromoted={false}
															promotedVariant='dark'
															favIcoIconColor='text-danger'
															getValue={getQty}
															Index={Index}
															rating={Products.rating?.rate}
														/>


														{/* } */}

													</div>
												))}

											</OwlCarousel>
										</Col>
									</Row>
								</Container>
							</section>


							<section className="section pt-5 pb-5 mt-3 products-section">
								<Container>
									<hr></hr>
									<div className={`section-header `}>
										<div className='text-center'>
											<h5><span className='border pl-4 pr-4 pt-2 pb-2 D-deal	' >Once Upon a Flavor</span></h5>
										</div>
									</div>
									<Row>
										<Col md={12} >
											<OwlCarousel nav loop {...options} className="owl-carousel-four owl-theme">

											{(Products?.map((Products, Index) =>
													<div className="item">
														{/* {Spotlight.prices.length>1?'': */}


														<CardItem
															id={Products.id}
															title={Products.title}
															// subTitle='North Indian • American • Pure veg'
															imageAlt={Products.image}
															image={Products.image}
															imageClass='BTS item-img'
															// linkUrl='detail'
															// offerText='65% off | Use Coupon sumit50'
															// time='20–25 min'
															price={Products.price}
															// discountprice={Products.discountprice}
															priceUnit='₹ '
															// showPromoted={false}
															promotedVariant='dark'
															favIcoIconColor='text-danger'
															getValue={getQty}
															Index={Index}
															rating={Products.rating?.rate}
														/>


														{/* } */}

													</div>
												))}

											</OwlCarousel>
										</Col>
									</Row>
								</Container>
							</section>

							<Nutrition />
							<BuyNow />
						</div>


						
					</div>
				)}
			</GlobalContext.Consumer>
		</>





	);
}



const options = {
	responsive: {
		0: {
			items: 1,
		},
		600: {
			items: 2,
		},
		1000: {
			items: 4,
		},
		1200: {
			items: 4,
		},
	},

	lazyLoad: true,
	pagination: false.toString(),
	loop: true,
	dots: false,
	autoPlay: 2000,
	nav: true,
	navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]
}




export default Index;