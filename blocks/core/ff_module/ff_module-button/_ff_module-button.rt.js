'use strict';
var React = require('react/addons');
var _ = require('lodash');
module.exports = function () {
    return React.createElement('button', {
        'type': 'button',
        'title': this.props.text,
        'id': this.props.id,
        'disabled': this.props.disabled,
        'className': this.generateClass('ff_module-button'),
        'onClick': this.props.onClick
    }, this.props.icon && !(this.props.iconAlign === 'right') ? React.createElement('span', { 'className': 'ff_icon' + (this.props.icon ? ' ff_icon-' + this.props.icon : '') + (this.props.hide_text ? '' : ' ff_icon-left') }) : null, React.createElement('span', { 'className': 'ff_module-button__content' + (this.props.hide_text ? ' ff_module-button__content--hidden' : '') }, this.props.text), this.props.icon && this.props.iconAlign === 'right' ? React.createElement('span', { 'className': 'ff_icon' + (this.props.icon ? ' ff_icon-' + this.props.icon : '') + (this.props.hide_text ? '' : ' ff_icon-right') }) : null);
};