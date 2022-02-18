import { shallow } from 'enzyme';
import Notifications from './Notifications'
import React from 'react';
import NotificationItem from './NotificationItem';

let wrapper = null;

describe('Notification HTML', () => {
  it("checks if the first div is rendered properly without error", () => {
    wrapper = shallow(<Notifications displayDrawer={true}/>);
    expect(wrapper.exists('.Notifications')).toBeTruthy()
  });

  it("renders three list elements properly", () => {
    expect(wrapper.find(NotificationItem).length).toBe(3);
  });

  it("renders correct text for the first li tag", () => {
    expect(wrapper.find(NotificationItem).first().prop('value')).toBe('New course available');
  });

  it("renders correct text for p tag", () => {
    expect(wrapper.find('p').text()).toBe('Here is the list of notifications');
  });

  /* === */

  it("menu item is being displayed when displayDrawer is false", () => {
    wrapper = shallow(<Notifications displayDrawer={true}/>)
    expect(wrapper.find('.menuItem').length).toBe(1);
  });

  it("div.Notifications is not being displayed when displayDrawer is false", () => {
    wrapper = shallow(<Notifications displayDrawer={false}/>)
    expect(wrapper.find('.Notifications').length).toBe(0);
  });

  it("menu item is being displayed when displayDrawer is true", () => {
    wrapper = shallow(<Notifications displayDrawer={true}/>)
    expect(wrapper.find('.menuItem').length).toBe(1);
  });

  it("div.Notifications is being displayed when displayDrawer is true", () => {
    wrapper = shallow(<Notifications displayDrawer={true}/>)
    expect(wrapper.find('.Notifications').length).toBe(1);
  });
});
