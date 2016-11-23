import React from 'react';
import TestUtils from 'react-addons-test-utils';
import * as chai from 'chai';
let should = chai.should();
import PlannerLanding from '../../client/js/plannerLanding.js';

const renderer = TestUtils.createRenderer();
renderer.render(<PlannerLanding />);
const result = renderer.getRenderOutput();

describe('<PlannerLanding />', () => {
  it('Renders a div', () => {   
    result.type.should.equal('div');
  });
  it('Renders a div with an id of "planner-landing-container"', () => {
    result.props.id.should.equal('planner-landing-container');
  });
  it('Renders a div with 2 children', () => {
    result.props.children.length.should.equal(2);
  });
  it('Renders a div with a div element child', () => {
    result.props.children[0].type.should.equal('div');
  });
  it('Renders a first child div with a className of "header"', () => {
    result.props.children[0].props.className.should.equal('header');
  });
  it('Renders a div with a second div element child', () => {
    result.props.children[1].type.should.equal('div');
  });
  it('Renders a 2nd child div with a id of "planner-landing-main"', () => {
    result.props.children[1].props.id.should.equal('planner-landing-main');
  });
});