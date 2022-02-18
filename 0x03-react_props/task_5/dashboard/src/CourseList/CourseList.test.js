import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList'
import CourseListRow from './CourseListRow'

let wrapper = null;

describe('CourseList Component', () => {
  it("Checks if the CourseList component is rendered properly without error", () => {
    wrapper = shallow(<CourseList/>);
    expect(wrapper.exists('#CourseList')).toBeTruthy()
  });
  it('Should render five <CourseListRow> components', () => {
    wrapper = shallow(<CourseList/>);
    expect(wrapper.find(CourseListRow).length).toBe(5);
  });
});
