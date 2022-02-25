/**
 * @jest-environment jsdom
 */
import { shallow, render } from 'enzyme';
import App from './App';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList'
import React from 'react';

let wrapper = null;

jest.mock('react-dom', () => ({
  render: jest.fn(),
}));

describe('App HTML', () => {
  it("Checks if App is rendered properly without error", () => {
    wrapper = shallow(<App/>);
    expect(wrapper.exists('.App')).toBeTruthy()
  });

  it("renders App-Notifications properly", () => {
    wrapper = shallow(<App/>);
    expect(wrapper.exists(<Notifications/>));
  });

  it("renders App-header properly", () => {
    wrapper = shallow(<App/>);
    expect(wrapper.exists(<Header/>));
  });

  it("renders App-footer properly", () => {
    wrapper = shallow(<App/>);
    expect(wrapper.exists(<Footer/>));
  });

  it("renders App-Login properly", () => {
    wrapper = shallow(<App/>);
    expect(wrapper.exists(<Login/>));
  });

  it("should not display CourseList", () => {
    wrapper = shallow(<App/>)
    expect(wrapper.find('.App-body').render().find('#CourseList').length).toBe(0);
  });
});

describe('App HTML (isLoggedIn = true)', () => {
  it("should not display Login", () => {
    wrapper = shallow(<App isLoggedIn={true}/>)
    expect(wrapper.find('.App-body').render().find('.login-form').length).toBe(0);
  });

  it("should display CourseList", () => {
    wrapper = shallow(<App isLoggedIn={true}/>)
    expect(wrapper.find('.App-body').render().find('#CourseList').length).toBe(1);
  });
});
