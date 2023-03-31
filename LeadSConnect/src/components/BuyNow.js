import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';
import BestSeller from './common/BestSeller';
import React, { useContext } from 'react';
import { GlobalContext } from './GlobalState';


const BuyNow = () => {

   const {Products, setProducts} = useContext(GlobalContext)

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
                            <h5><span className='border pl-4 pr-4 pt-2 pb-2 D-deal	' >Best Selling Products</span></h5>
                        </div>
                    </div>

                    <Row>
                        
                        <Col md={12} >
                        <OwlCarousel nav loop {...options} className="owl-carousel-four owl-theme">
                        {(Products.map((Product, Index) =>
                            
                                    <BestSeller
                                        id={Product.id}
                                        title={Product.title}
                                        imageAlt={Product.image}
                                        image={Product.image}
                                        imageClass='imgheight'
                                        favIcoIconColor='text-danger'
                                        Index={Index}
                                    />
 
                        ))}
                        </OwlCarousel>
                        </Col>
                    </Row>

                    
                </Container>
            </section>
        </div>
    )
}

export default BuyNow