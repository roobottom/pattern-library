'use strict';

var React = require('react');

module.exports = React.createClass({
	render: function() {
		return <div className='ff_module-responses'>
			<div className='ff_module-responses__recipients'>
				{this.props.recipientList}
			</div>
			<div className='ff_module-responses__content'>
				{this.props.responseDetails}
			</div>
		</div>
	}
});
