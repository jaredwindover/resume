import React from 'react';
import moment from 'moment';

import '../../scss/workExperience.scss';

import strings from './strings.json';

const FDate = ({date}) => (
	<span>
	  <span class="month">{
		    date.format('MMMM')
	    }</span> <span class="year">{
		    date.format('YYYY')
	    }</span>
	</span>
);

const Job = ({
	company,
	location: {city, province},
	title,
	time: {start, end},
	description,
	...rest
}) => (
	<section {...rest}>
	  <h3 class="company-name">{company}</h3>
	  <div class="timerange">
	    <FDate date={start}/> &mdash; <FDate date={end}/>
	  </div>
	  <div class="location">{city} {province}</div>
	  <div class="title">{title}</div>
	  <div class="description">
	    <p>{description}</p>
	  </div>
	</section>
);

export default () => (
	<section id="work-experience">
	  <h2>Work Experience</h2>
	  <Job
	    id="noustalk"
	    time={{start: moment([2017, 1]), end: moment()}}
	    {...strings.noustalk}/>
	  <hr/>

	  <Job
	    id="td"
	    time={{start: moment([2016, 10]), end: moment([2017, 6])}}
	    {...strings.td}/>
	  <hr/>

	  <Job
	    id="magnet"
	    time={{start: moment([2015, 11]), end: moment([2016, 10])}}
	    {...strings.magnet}/>
	  <hr/>

	  <Job
	    id="ens"
	    time={{start: moment([2015, 6]), end: moment([2015, 11])}}
	    {...strings.ens}/>
	  <hr/>

	  <Job
	    id="christie"
	    time={{start: moment([2014, 7]), end: moment([2014, 11])}}
	    {...strings.christie}/>
	  <hr/>

	  <Job
	    id="gov"
	    time={{start: moment([2013, 0]), end: moment([2014, 7])}}
	    {...strings.gov}/>
	  <hr/>

	  <Job
	    id="fgf"
	    time={{start: moment([2012, 4]), end: moment([2012, 7])}}
	    {...strings.fgf}/>
	  <hr/>

	  <Job
	    id="ieso"
	    time={{start: moment([2011, 8]), end: moment([2011, 11])}}
	    {...strings.ieso}/>
	  <hr/>

	  <Job
	    id="maplesoft"
	    time={{start: moment([2009, 11]), end: moment([2010, 7])}}
	    {...strings.maplesoft}/>
	  <hr/>

	  <Job
	    id="blackbelt-schools"
	    time={{start: moment([2011, 1]), end: moment([2013, 8])}}
	    {...strings.blackbeltSchools}/>
	  <hr/>

	  <Job
	    id="dynamic-arts"
	    time={{start: moment([2004, 5]), end: moment([2007, 11])}}
	    {...strings.dynamicArts}/>
	  <hr/>

	  <Job
	    id="ispin"
	    time={{start: moment([2008, 2]), end: moment([2010, 8])}}
	    {...strings.ispin}/>
	</section>
);
