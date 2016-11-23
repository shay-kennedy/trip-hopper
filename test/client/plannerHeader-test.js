import React from 'react';
import TestUtils from 'react-addons-test-utils';
import * as chai from 'chai';
let should = chai.should();
import PlannerHeader from '../../client/js/plannerHeader.js';

const renderer = TestUtils.createRenderer();
renderer.render(<PlannerHeader />);
const result = renderer.getRenderOutput();

describe('<PlannerHeader />', () => {
  it('Renders a div', () => {   
    result.type.should.equal('div');
  });
  it('Renders a div with an className of "header"', () => {
    result.props.className.should.equal('header');
  });
  it('Renders a div with 2 children', () => {
    result.props.children.length.should.equal(2);
  });
  it('Renders a div with an "a" element child', () => {
    result.props.children[0].type.should.equal('a');
  });
  it('Renders a div with an "Link" element child', () => {
    result.props.children[1].type.displayName.should.equal('Link');
  });
});