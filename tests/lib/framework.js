'use strict';


exports.setUpTestFramework = function setUpTestFramework(React, TestUtils, expect) {
    return function getTestFramework(ComponentClass, propsList, testDefinitions, propsDescription) {

        var getPropsDescription = function(props, index) {
            return 'props[' + index + ']';
        };

        if (typeof propsDescription === 'string') {
            getPropsDescription = function getPropsDescription(props) {
                return props[propsDescription];
            };
        } else if (typeof propsDescription === 'function') {
            getPropsDescription = propsDescription;
        }


        return function runTests() {
            it('should render', function() {
                var element = React.createElement(ComponentClass, propsList[0]);
                var component = TestUtils.renderIntoDocument(element);
                expect(component).to.exist;
            });

            propsList.forEach(function(props, index) {
                describe(getPropsDescription(props, index), function() {
                    var component;

                    before(function() {
                        var element = React.createElement(ComponentClass, props);
                        component = TestUtils.renderIntoDocument(element);
                    });

                    Object.keys(props).forEach(function(key) {
                        if (testDefinitions[key]) {
                            it('should render \'' + key + '\' of \'' + props[key] + '\'', function() {
                                testDefinitions[key](component, props[key], props);
                            });
                        }
                    });
                });
            });
        }
    }
};

exports.setupGetElementByClass = function setupGetElementByClass(React, TestUtils, ClassType) {
    return function getElementByClass(props, className) {
        var element = React.createElement(ClassType, props);
        var component = TestUtils.renderIntoDocument(element);
        return TestUtils.findRenderedDOMComponentWithClass(component, className);
    };
};

exports.setupGetElementsByClass = function setupGetElementsByClass(React, TestUtils, ClassType) {
    return function getElementsByClass(props, className) {
        var element = React.createElement(ClassType, props);
        var component = TestUtils.renderIntoDocument(element);
        return TestUtils.scryRenderedDOMComponentsWithClass(component, className);
    };
};

exports.wrapStatelessComponent = function wrap(React, statelessComponent) {
  return React.createClass({
    render: function() {
      return statelessComponent(this.props);
    }
  });
}
