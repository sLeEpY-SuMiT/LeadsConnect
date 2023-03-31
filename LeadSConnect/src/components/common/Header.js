import React, { useState, useEffect, useContext, useLocation } from 'react';
import { NavLink, Link, useHistory } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown, Image, Badge, Button, Toast, Form } from 'react-bootstrap';
import DropDownTitle from '../common/DropDownTitle';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalContext } from '../../components/GlobalState';
import CartDropdownHeader from '../cart/CartDropdownHeader';
import CartDropdownItem from '../cart/CartDropdownItem';



function Header() {

	const { Products, setProducts, Getitems, setGetitems } = useContext(GlobalContext)

	let count = 0
	let total = 0
	const [CartCount, setCartCount] = useState(0)
	const [CartTotal, setCartTotal] = useState(0)


	const GetCartCount = () => {
		Getitems.forEach((data) => {
			count = count + Number(data.quantity)
			let T = Number(data.price) * Number(data.quantity)
			total = total + T
		})
		setCartTotal(total.toFixed(2))
		setCartCount(count)
		console.log(count);
	}

	useEffect(() => {
		GetCartCount()
	}, [Getitems])



	const [isNavExpanded, setNavExpanded] = useState(false);
	const setIsNavExpanded = (isNavExpanded) => {
		setNavExpanded(isNavExpanded);
	}
	const closeMenu = () => {
		setNavExpanded(false);
	}

	return (

		<GlobalContext.Consumer>

			{(state) => (
				<div className='headerfix'>
					<Navbar onToggle={setIsNavExpanded}
						expanded={isNavExpanded} color="light" expand='lg' className="navbar-light sumit-nav shadow-sm">
						<Container>


							<Navbar.Brand eventKey={0} as={NavLink} exact to="/">
								<div className='D-header'>
									<Image src={"https://nourishstore.co.in/wp-content/uploads/2021/04/splash-screen.png"} alt='Logo' />
									<Form.Control placeholder="Enter Address" className='mt-3 ml-2' />
									<Form.Control className='ml-2 mt-3' placeholder="search for products" />
								</div>
							</Navbar.Brand>

							<Navbar.Toggle />
							<Navbar.Collapse id="navbarNavDropdown">
								<Nav activeKey={0} className="ml-auto" onSelect={closeMenu}>
									<NavDropdown title="Categories" className="border-0">
										<NavDropdown.Item eventKey={2.1} as={NavLink} activeclassname="active" to="/listing">Unpolished Dal</NavDropdown.Item>
										<NavDropdown.Item eventKey={2.2} as={NavLink} activeclassname="active" to="/detail">Rice</NavDropdown.Item>
										<NavDropdown.Item eventKey={2.3} as={NavLink} activeclassname="active" to="/checkout">Pure Ghee</NavDropdown.Item>
									</NavDropdown>


									<Nav.Link eventKey={2} as={NavLink} activeclassname="active" to="/listing" >
										Recipes
									</Nav.Link>

									<NavDropdown
										title={
											<DropDownTitle
												className='d-inline-block'
												faIcon='shopping-cart'
												iconClass='mr-1'
												badgeClass='ml-1'
												badgeVariant='success'
												badgeValue={CartCount}
											/>
										}

									>

										<div className="dropdown-cart-top shadow-sm">

											<div className="dropdown-cart-top-body border-top p-4">

												<div>

													{Getitems?.map((data) => (
														<CartDropdownItem
															icoIcon='ui-press'
															iconClass='text-success food-item'
															title={data.title}
															qty={data.quantity}
															id={data.id}
															price={data.price}
														/>
													))}

													{CartTotal > 0 ?
														<div className="dropdown-cart-top-footer border-top p-4">

															<div>
																<p className="mb-0 font-weight-bold text-secondary">Sub Total <span className="float-right text-dark">₹{CartTotal}</span></p>
															</div>



															<small className="text-info">Extra charges may apply</small>
														</div>
														: ""}

												</div>



											</div>

										</div>
									</NavDropdown>

									<Nav.Link eventKey={3} as={NavLink} activeclassname="active" exact to="/listing" >
										Partner With Us
									</Nav.Link>

									<Nav.Link eventKey={4} as={NavLink} activeclassname="active" exact to="/listing" >
										<i class="fa fa-user-circle" aria-hidden="true"></i>	Signup / Login
									</Nav.Link>
								</Nav>



							</Navbar.Collapse>


						</Container>
					</Navbar>
				</div>
			)}
		</GlobalContext.Consumer>

	);
}


export default Header;