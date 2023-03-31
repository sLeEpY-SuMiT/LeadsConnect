import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Image, Badge, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Icofont from 'react-icofont';
import { GlobalContext } from '../../components/GlobalState';


function CardItem(props) {
	const [quantity, setQuantity] = useState(1);

	const { Getitems, setGetitems, Products, setProducts } = useContext(GlobalContext);


	const GetAddedItems = () => {
		console.log(Getitems);
		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		var raw = JSON.stringify({
			"userId": "5",
			"date": "2023-03-31",
			"products": [...Getitems,
			{
				"productId": props.id,
				"quantity": quantity
			}
			]
		});

		var requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: raw,
			redirect: 'follow'
		};

		fetch("https://fakestoreapi.com/carts", requestOptions)
			.then(response => response.json())
			.then(result => {
				setGetitems(result.products);
				GetExactData(result.products)
			})
			.catch(error => console.log('error', error));
	}


	const GetExactData = (items) => {

		console.log(items);

		if (items.length > 0) {
			const copy = [...items];
			var index = -1;
			for (let i = 0; i < items.length; i++) {
				const data = items[i];
				if (data.productId == props.id) {
					index = i;
					break;
				}
			}
			if (index != -1) {
				copy[index].quantity = quantity
			} else {
				copy.push({ productId: props.id, quantity: quantity })
			}

			console.log(copy);
			setGetitems(copy)
			GetAddedProds(copy)
		}

	}

	const GetAddedProds = (copy) => {

		const modifiedArr = [];
		copy.forEach((item) => {
			Products.forEach((e) => {
				if (e.id == item.productId) {
					modifiedArr.push({ ...e, ...item })
				}
			})
		});
		setGetitems(modifiedArr)

		console.log(modifiedArr, Getitems);

	}


	// const UpdateCartItem = () => {
	// 	var myHeaders = new Headers();
	// 	myHeaders.append("Content-Type", "application/json");

	// 	var raw = JSON.stringify({
	// 		"userId": "5",
	// 		"date": "2023-03-31",
	// 		"products": [
	// 			{
	// 				"productId": props.id,
	// 				"quantity": quantity
	// 			}
	// 		]
	// 	});

	// 	var requestOptions = {
	// 		method: "PUT",
	// 		headers: myHeaders,
	// 		body: raw,
	// 		redirect: 'follow'
	// 	};

	// 	fetch("https://fakestoreapi.com/carts/7", requestOptions)
	// 		.then(response => response.json())
	// 		.then(result => console.log(result))
	// 		.catch(error => console.log('error', error));
	// }


	// const AddNewCartItem = () => {
	// 	var myHeaders = new Headers();
	// 	myHeaders.append("Content-Type", "application/json");

	// 	var raw = JSON.stringify({
	// 		"userId": "5 ",
	// 		"date": "2023-03-31",
	// 		"products": [
	// 			{
	// 				"productId": props.id,
	// 				"quantity": quantity
	// 			}
	// 		]
	// 	});

	// 	var requestOptions = {
	// 		method: "PATCH",
	// 		headers: myHeaders,
	// 		body: raw,
	// 		redirect: 'follow'
	// 	};

	// 	fetch("https://fakestoreapi.com/carts/7", requestOptions)
	// 		.then(response => response.json())
	// 		.then(result => console.log(result))
	// 		.catch(error => console.log('error', error));
	// }



	return (

		<div className="list-card bg-white  rounded overflow-hidden position-relative shadow-sm">

			<div className="list-card-image">
				<Image src={props.image} className={props.imageClass} alt={props.imageAlt} />
			</div>

			<div className="p-3 position-relative">
				<div className="list-card-body">
					<h6 className="mb-1 text-center"><Link className="text-black ">{props.title}</Link></h6>

					{props.rating ? (
						<div className="star ">
							<Badge variant="success">
								<Icofont icon='star' /> {props.rating}
							</Badge>
						</div>
					)
						: ""
					}
					{(props.price) ? (
						<p className="text-gray time mb-0 mt-2">
							<Link className="btn btn-link btn-sm pl-0 text-black pr-0" >
								<p style={{ fontSize: "16px" }}>{props.priceUnit}{props.price}</p>
								<p>(Inclusive of all taxes)</p></Link>

							<div style={{ display: 'flex', justifyContent: 'space-between' }}>
								<span className="count-number float-right">
									<input type="number" min={1} max={10} value={quantity} onChange={(e) => { setQuantity(e.target.value) }} />
								</span>

								<span className="float-right" >
									<Button variant='outline-secondary' onClick={() => { GetAddedItems() }} size="sm">ADD</Button>
								</span>
							</div>


						</p>
					) : ''
					}


					{(props.time || props.price) ? (
						<p className="text-gray mb-3 time">
							{props.time ? (
								<span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
									<Icofont icon='wall-clock' /> {props.time}
								</span>
							)
								: ""
							}

						</p>
					) : ''
					}

				</div>

				{props.offerText ? (
					<div className="list-card-badge">
						<Badge variant={props.offerColor}>OFFER</Badge> <small>{props.offerText}</small>
					</div>
				)
					: ""
				}
			</div>
		</div>

	);
}



CardItem.propTypes = {
	qty: PropTypes.number,
	minValue: PropTypes.number,
	maxValue: PropTypes.number,
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	imageAlt: PropTypes.string,
	image: PropTypes.string.isRequired,
	imageClass: PropTypes.string,
	linkUrl: PropTypes.string.isRequired,
	offerText: PropTypes.string,
	offerColor: PropTypes.string,
	subTitle: PropTypes.string,
	time: PropTypes.string,
	price: PropTypes.number.isRequired,
	discountprice: PropTypes.number,
	priceUnit: PropTypes.string.isRequired,
	showPromoted: PropTypes.bool,
	promotedVariant: PropTypes.string,
	favIcoIconColor: PropTypes.string,
	rating: PropTypes.string,
	getValue: PropTypes.func.isRequired,
	Index: PropTypes.number.isRequired,
	category_id: PropTypes.number.isRequired
};
CardItem.defaultProps = {
	imageAlt: '',
	imageClass: '',
	offerText: '',
	offerColor: 'success',
	subTitle: '',
	time: '',
	price: '',
	priceUnit: '',
	showPromoted: false,
	promotedVariant: 'dark',
	favIcoIconColor: '',
	rating: '',
}

export default CardItem;