import React from 'react';
import TestUtils from 'react-addons-test-utils';
import * as chai from 'chai';
let should = chai.should();
import TripModule from '../../client/js/tripModule.js';

const renderer = TestUtils.createRenderer();
renderer.render(<TripModule.WrappedComponent />);
const result = renderer.getRenderOutput();

describe('<TripModule />', () => {
  it('Renders a div', () => {   
    result.type.should.equal('div');
  });
  it('Renders a div with a className "trip-module"', () => {   
    result.props.className.should.equal('trip-module');
  });
  it('Renders a div with 2 children', () => {
    result.props.children.length.should.equal(2);
  });
});