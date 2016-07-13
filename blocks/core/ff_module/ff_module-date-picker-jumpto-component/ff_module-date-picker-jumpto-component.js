'use strict';

var React = require('react');
var activateDatePickerJumpTo = require('../ff_module-date-picker-jumpto/ff_module-date-picker-jumpto');

module.exports = React.createClass({
	displayName: 'DatePickerJumpTo',
    
    propTypes: {
        modifier: React.PropTypes.string
    },

	componentDidMount: function() {

		console.log(this.props);
		
		activateDatePickerJumpTo({
			root: this._root,
			selector: 'data-ff=date-picker',
			displayElement: 'data-ff-target-input-id',
			dueDateStoreRef: '{this.props.ref}'
		});
	},

	bindRef: function(component){
	    this._root = component;
	},
	
	render: function() {

		var inputs = [];
		if (this.props.dataUrlPrefix) {
			inputs.push(<input className="ff_module-date-picker-jumpto__cal yes" data-ff="date-picker" data-ff-url-prefix={this.props.dataUrlPrefix} value=""/>);	
		}
		if (this.props.id) {
			inputs.push(<input className="ff_module-date-picker-jumpto__cal" data-ff="date-picker" data-ff-target-input-id={this.props.id} data-ff-display-format={this.props.dateFormat} value=""/>);
		}
		
		return (
			<div className="ff_module-date-picker-jumpto__icon" options={this.options} ref={this.bindRef}>
		        <span className="ff_icon ff_icon-calendar-blue ff_module-date-picker-jumpto__trigger">			
		        	{inputs}
		        </span>
		    </div>
		)
	}

});
