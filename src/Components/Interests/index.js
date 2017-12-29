import React from 'react';
import Personal from './Personal';
import Professional from './Professional';

import '../../../scss/interests.scss';

export default () => (
	<section id="interests">
	  <h2>Interests</h2>
	  <Professional/>
	  <Personal/>
	</section>
);
