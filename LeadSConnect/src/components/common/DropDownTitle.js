import React,{useState} from 'react';
import PropTypes from 'prop-types'; 
import {Image,Badge} from 'react-bootstrap';
import FontAwesome from '../common/FontAwesome';

function DropDownTitle(props) {
	
		return (
			<div className={props.className}>
				{
					props.image?
					<Image alt={props.imageAlt} src={props.image} className={props.imageClass} />
					:''
				}

				{(props.faIcon && !props.image)?
		    		<FontAwesome icon={props.faIcon} className={props.iconClass}/>:''
				}

				{props.title}

				{props.badgeValue?
					<Badge variant={props.badgeVariant} className={props.badgeClass}>{props.badgeValue}</Badge>
					:''
				}
		    </div>
		);
	}


DropDownTitle.propTypes = {
  title: PropTypes.string.isRequired,
  faIcon: PropTypes.string,
  iconClass: PropTypes.string,
  className: PropTypes.string,
  image: PropTypes.string,
  imageAlt:PropTypes.string,
  imageClass: PropTypes.string,
  badgeVariant: PropTypes.string,
  badgeClass: PropTypes.string,
  badgeValue: PropTypes.number,
};

DropDownTitle.defaultProps = {
    faIcon: '',
    iconClass:'',
    className:'',
  	imageAlt:'',
    image:'',
    imageClass:'',
    badgeVariant:'',
    badgeClass: '',
    badgeValue:0,
}

export default DropDownTitle;