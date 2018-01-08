import React from 'react';
import {withProps} from 'recompose';

import '../../scss/header.scss';

const Separator = ({icon, solid=false, brand=false, regular=false}) => {
	regular = !(brand || solid);
	const faType = regular ? 'far':
	      (solid ? 'fas' :
	       (brand? 'fab': 'fa'));
	return (
		<i class={`${faType} fa-${icon} fa-xs`}></i>
	);
};

const StarSep = withProps({icon: 'star'})(Separator);

const SolidSep = withProps({solid: true})(Separator);

const BrandSep = withProps({brand: true})(Separator);

export default () => (
	<header>
	  <h1>Jared Windover</h1>
	  <p>Passionate About Quality Code</p>
	  <p>Skilled in application development, refactoring, and debugging</p>
	  <p>Proponent of Test-Driven Development (when it makes sense)</p>
	  <address>
	    <ul>
	      <li><SolidSep icon="envelope"/><span>jaredwindover@gmail.com</span></li>
	      <li><SolidSep icon="phone"/><span>(519) 277-0773</span></li>
	    </ul>
	  </address>
	</header>
)
