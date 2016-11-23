import React from 'react';
import TestUtils from 'react-addons-test-utils';
import * as chai from 'chai';
let should = chai.should();
import SearchInput from '../../client/js/searchInput.js';

const renderer = TestUtils.createRenderer();
renderer.render(<SearchInput.WrappedComponent />);
const result = renderer.getRenderOutput();

describe('<SearchInput />', () => {
  it('Renders a div', () => {   
    result.type.should.equal('div');
  });
  it('Renders a form element child', () => {
    result.props.children.type.should.equal('form');
  });
});