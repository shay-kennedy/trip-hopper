import React from 'react';
import TestUtils from 'react-addons-test-utils';
import * as chai from 'chai';
let should = chai.should();
import Landing from '../../client/js/landing.js';

const renderer = TestUtils.createRenderer();
renderer.render(<Landing />);
const result = renderer.getRenderOutput();

describe('<Landing />', () => {
  it('Renders a div', () => {   
    result.type.should.equal('div');
  });
  it('Renders a div with an id of "landing"', () => {
    result.props.id.should.equal('landing');
  });
  it('Renders a div with 3 children', () => {
    result.props.children.length.should.equal(3);
  });
  it('Renders a div with "h1" child', () => {
    result.props.children[0].type.should.equal('h1');
  });
  it('Renders a div with "p" child', () => {
    result.props.children[1].type.should.equal('p');
  });
  it('Renders a div with "a" child', () => {
    result.props.children[2].type.should.equal('a');
  });
});