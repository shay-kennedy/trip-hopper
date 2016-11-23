import React from 'react';
import TestUtils from 'react-addons-test-utils';
import * as chai from 'chai';
let should = chai.should();
import Maps from '../../client/js/maps';

const renderer = TestUtils.createRenderer();
renderer.render(<Maps />);
const result = renderer.getRenderOutput();

describe('<Maps />', () => {
  it('Renders a div', () => {   
    result.type.should.equal('div');
  });
  it('Renders a div with a className of "map-display"', () => {   
    result.props.className.should.equal('map-display');
  });
});