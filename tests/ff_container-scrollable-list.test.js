var React = require('react');

var TestUtils = require('react-addons-test-utils');
var expect = require('chai').expect;
var _ = require('lodash');

var ScrollableList = require('../blocks/core/ff_container/ff_container-scrollable-list/ff_container-scrollable-list');
var mainText = 'Main div',
    sidebarText = 'Sidebar div',
    mainClass ='ff_container-scrollable-list__item--main',
    sidebarClass='ff_container-scrollable-list__item--sidebar';

var main = React.createElement('div', { style: { margin: 0 } }, mainText),
    sidebar = React.createElement('div', { style: { margin: 0 } }, sidebarText);

describe('ScrollableList', function() {
    var component;

    before(function() {
        var element = React.createElement(ScrollableList, {
            main: main,
            sidebar: sidebar
        });
        component = TestUtils.renderIntoDocument(element);
    });

    it('should render', function() {
        expect(component).to.exist;
    });

    it('should render the correct sidebar text: \'' + sidebarText + '\'', function() {
        var items = TestUtils.findRenderedDOMComponentWithClass(component, sidebarClass);
        expect(items.textContent).to.equal(sidebarText);
    });

    it('should render the correct main text: \'' + mainText + '\'', function() {
        var items = TestUtils.findRenderedDOMComponentWithClass(component, mainClass);
        expect(items.textContent).to.equal(mainText);
    });

});
