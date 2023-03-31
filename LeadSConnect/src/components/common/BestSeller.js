import React from 'react';
import { Image, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function BestSeller(props) {

  return (
    <>
      <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
        <div className="list-card-image" >

          <Image style={{ borderRadius: "20px" }} src={props.image} className={props.imageClass} alt={props.imageAlt} />

        </div>
        <div className="p-3 position-relative">
          <div className="list-card-body">

            <div className="text-center" >
              <Button style={{ borderRadius: "20px", color: "red" }} variant='outline-secondary' size="sm">BUY NOW</Button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

BestSeller.propTypes = {
  title: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  image: PropTypes.string.isRequired,
  imageClass: PropTypes.string,
  id: PropTypes.number.isRequired,
  Index: PropTypes.number.isRequired,

};
BestSeller.defaultProps = {
  imageAlt: '',
  imageClass: '',
}

export default BestSeller;