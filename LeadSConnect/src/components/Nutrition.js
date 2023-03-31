import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';

import CardItem from './common/CardItem';

import { Form, InputGroup, Button, Tab, Nav, Badge, Tabs } from 'react-bootstrap';

import React, { useContext } from 'react';
import { GlobalContext } from './GlobalState';

const Nutrition = () => {

    
   

    const { Products, setProducts } = useContext(GlobalContext)

    const getStarValue = ({ value }) => {
        console.log(value);
        //console.log(quantity);
    }
    const getQty = ({ id, quantity }) => {
        //console.log(id);
        //console.log(quantity); 
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

    return (
        <div>
            <section className="section pt-5 pb-5 mt-3 products-section">
                <Container>
                    <hr></hr>
                    <div className={`section-header `}>
                        <div className='text-center'>
                            <h5><span className='border pl-4 pr-4 pt-2 pb-2 D-deal	' >The Nutrition Way</span></h5>
                        </div>
                    </div>

                    <div className='d-flex justify-content-center mb-3'>
                        <Tabs defaultActiveKey="Unpoloshed dal" id="uncontrolled-tab-example" className="OffersTab">
                            <Tab eventKey="Unpoloshed dal" title="Unpoloshed dal" className="test-tab">

                            </Tab>

                            <Tab eventKey="Rice" title="Rice">
                            </Tab>

                            <Tab eventKey="Oil & Ghee" title="Oil & Ghee">
                            </Tab>

                            <Tab eventKey="Flours" title="Flours">
                            </Tab>

                            <Tab eventKey="Dry Fruits" title="Dry Fruits">
                            </Tab>

                            <Tab eventKey="Ready To Cook" title="Ready To Cook">
                            </Tab>
                        </Tabs>
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
        </div>
    )
}

export default Nutrition