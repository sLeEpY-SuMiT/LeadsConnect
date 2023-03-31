import React from 'react';
import PropTypes from 'prop-types'; 

function FontAwesome (props) {
	
    	return (
	      <i className={`fa fa-${props.icon} ${props.className}`}></i>
		);
	}



FontAwesome.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
};
FontAwesome.defaultProps = {
  	icon:'',
  	className:'',
}

export default FontAwesome;