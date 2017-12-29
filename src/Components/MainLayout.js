import React from 'react';

import Header from './Header';
import WorkExperience from './WorkExperience';
import Technology from './Technology';
import Skills from './Skills';
import Interests from './Interests';
import Education from './Education';
import Code from './Code';

export default () => (
	<div>
	  <Header/>
	  <div id="content">
	    <WorkExperience/>
	    <Technology/>
	    <Skills/>
	    <Interests/>
	    <Education/>
	    <Code/>
	  </div>
	</div>
);
