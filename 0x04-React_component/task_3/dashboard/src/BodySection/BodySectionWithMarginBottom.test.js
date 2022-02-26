import React from 'react';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom'
import { shallow } from 'enzyme';

let wrapper = null;

describe('Testing BodySectionWithMarginBottom render()', () => {
  beforeEach(() => {
    wrapper = null;
    wrapper = shallow(
      <BodySectionWithMarginBottom title='title test'><p>Test child</p></BodySectionWithMarginBottom>
    );
  })
  // in task_3/dashboard/src/BodySection/BodySectionWithMarginBottom.test.js:
  // Add one test checking that shallowing the component should render correctly a BodySection component and that the props are passed correctly to the child component
})