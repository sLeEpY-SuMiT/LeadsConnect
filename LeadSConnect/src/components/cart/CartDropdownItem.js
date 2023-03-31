import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Icofont from 'react-icofont';
import { Button } from 'react-bootstrap';
import { GlobalContext } from '../GlobalState';
function CartDropdownItem(props) {


  const { Getitems, setGetitems, Products, setProducts } = useContext(GlobalContext);

  const DecreaseItem = () => {

    let copy = [...Getitems];
    var index = -1;
    for (let i = 0; i < Getitems.length; i++) {
      const data = Getitems[i];
      if (data.productId == props.id) {
        index = i;
        break;
      }
    }
    if (index != -1 && props.qty != 1) {
      copy[index].quantity = Number(props.qty) - 1
    } else {
      let Filtered = [...copy]
      const items = Filtered.filter((item) => (
        item.productId != props.id
      ))
      copy = [...items]
    }

    console.log(copy);
    setGetitems(copy)
    GetAddedProds(copy)
  }



  const GetExactData = () => {


    const copy = [...Getitems];
    var index = -1;
    for (let i = 0; i < Getitems.length; i++) {
      const data = Getitems[i];
      if (data.productId == props.id) {
        index = i;
        break;
      }
    }
    if (index != -1) {
      copy[index].quantity = Number(props.qty) + 1
    } else {
      copy.push({ productId: props.id, quantity: props.qty })
    }

    console.log(copy);
    setGetitems(copy)
    GetAddedProds(copy)
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

  return (


    <p className="mb-2">

      <Icofont icon={props.icoIcon} className={"mr-1 " + props.iconClass} />

      <span>{props.title}</span>
      <span className="count-number float-right ml-2">
        <Button variant="outline-secondary" className="btn-sm left dec" onClick={() => DecreaseItem()}> <Icofont icon="minus" /> </Button>
        <input className="count-number-input" type="text" value={Math.abs(props.qty)} readOnly />
        <Button variant="outline-secondary" className="btn-sm right inc" onClick={() => GetExactData()}> <Icofont icon="icofont-plus" /> </Button>
      </span>
      <span className="float-right text-secondary"> ₹{props.price * props.qty}</span>
    </p>

  );
}


CartDropdownItem.propTypes = {
  id: PropTypes.number.isRequired,
  qty: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  icoIcon: PropTypes.string.isRequired,
  iconclass: PropTypes.string.isRequired
};

CartDropdownItem.defaultProps = {
  id: '',
  title: '',
  price: '',
  icoIcon: '',
  iconclass: '',
}

export default CartDropdownItem;