import React from 'react';
import moment from 'moment';
import {
	compose,
	branch,
	withState,
	withProps,
	mapProps,
	renderNothing,
	renderComponent,
	setDisplayName
} from 'recompose';
import _ from 'lodash';

import '../../scss/workExperience.scss';

import strings from './strings.json';

const omitProp = p => mapProps(props => _.omit(props, p));

const FDate = ({date}) => (
	<span>
	  <span class="month">{
		    date.format('MMMM')
	    }</span> <span class="year">{
		    date.format('YYYY')
	    }</span>
	</span>
);

const JobDescription = compose(
	setDisplayName('JobDescription'),
	branch(({open}) => !open, renderNothing)
)
	(({description}) => (
	<div class="description">
	  <p>{description}</p>
	</div>
));

const CaretDown = props => (
	<div {...props}>
	  <i class={`fa fa-caret-down`}></i>
	</div>
);

const CaretUp = props => (
	<div {...props}>
	  <i class={`fa fa-caret-up`}></i>
	</div>
);

const Caret = compose(
	setDisplayName('Caret'),
	branch(
		({up}) => up,
		compose(
			omitProp('up'),
			omitProp('down'),
			renderComponent(CaretUp)
		)
	),
	omitProp('up'),
	omitProp('down')
)(CaretDown);

const Job = compose(
	setDisplayName('Job'),
	withState('open', 'setOpen', ({defaultOpen}) => !!defaultOpen),
	branch(
		({open}) => open,
		withProps({className: 'open'}),
		withProps({className: 'closed'})
	),
	omitProp('defaultOpen')
)(({
	company,
	location: {city, province},
	title,
	time: {start, end},
	description,
	open,
	setOpen,
	...rest
}) => (
	<div {...rest}>
	  <hr/>
	  <section onClick={() => {
		    console.dir('HERE');
		    setOpen(!open);
	    }}>
	    <h3 class="company-name">{company}</h3>
	    <div class="timerange">
	      <FDate date={start}/> &mdash; <FDate date={end}/>
	    </div>
	    <div class="location">{city} {province}</div>
	    <div class="title">{title}<Caret class="caret" up={open}/></div>
	    <JobDescription description={description} open={open}/>
	  </section>
	</div>
));

export default setDisplayName('WorkExperience')(() => (
	<section id="work-experience">
	  <h2>Work Experience</h2>
	  <Job
	    id="noustalk"
	    time={{start: moment([2017, 1]), end: moment()}}
	    defaultOpen={true}
	    {...strings.noustalk}/>

	  <Job
	    id="td"
	    time={{start: moment([2016, 10]), end: moment([2017, 6])}}
	    defaultOpen={true}
	    {...strings.td}/>

	  <Job
	    id="magnet"
	    time={{start: moment([2015, 11]), end: moment([2016, 10])}}
	    defaultOpen={true}
	    {...strings.magnet}/>

	  <Job
	    id="ens"
	    time={{start: moment([2015, 6]), end: moment([2015, 11])}}
	    {...strings.ens}/>

	  <Job
	    id="christie"
	    time={{start: moment([2014, 7]), end: moment([2014, 11])}}
	    {...strings.christie}/>

	  <Job
	    id="gov"
	    time={{start: moment([2013, 0]), end: moment([2014, 7])}}
	    {...strings.gov}/>

	  <Job
	    id="fgf"
	    time={{start: moment([2012, 4]), end: moment([2012, 7])}}
	    {...strings.fgf}/>

	  <Job
	    id="ieso"
	    time={{start: moment([2011, 8]), end: moment([2011, 11])}}
	    {...strings.ieso}/>

	  <Job
	    id="maplesoft"
	    time={{start: moment([2009, 11]), end: moment([2010, 7])}}
	    {...strings.maplesoft}/>

	  <Job
	    id="blackbelt-schools"
	    time={{start: moment([2011, 1]), end: moment([2013, 8])}}
	    {...strings.blackbeltSchools}/>

	  <Job
	    id="dynamic-arts"
	    time={{start: moment([2004, 5]), end: moment([2007, 11])}}
	    {...strings.dynamicArts}/>

	  <Job
	    id="ispin"
	    time={{start: moment([2008, 2]), end: moment([2010, 8])}}
	    {...strings.ispin}/>
	</section>
));
