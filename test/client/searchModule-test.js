import React from 'react';
import TestUtils from 'react-addons-test-utils';
import * as chai from 'chai';
let should = chai.should();
import SearchModule from '../../client/js/searchModule.js';

const renderer = TestUtils.createRenderer();
renderer.render(<SearchModule.WrappedComponent />);
const result = renderer.getRenderOutput();

describe('<SearchModule />', () => {
  it('Renders a div', () => {   
    result.type.should.equal('div');
  });
  it('Renders a div with a className "search-module"', () => {   
    result.props.className.should.equal('search-module');
  });
  it('Renders a div with 5 children', () => {
    result.props.children.length.should.equal(5);
  });
});