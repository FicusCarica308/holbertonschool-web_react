import { login, logout, displayNotificationDrawer, hideNotificationDrawer, loginRequest, loginSuccess, loginFailure } from './uiActionCreators'
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './courseActionTypes'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import fetchMock from 'fetch-mock-jest'

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Tests for loginRequest() function', () => {
  it('API returns the right response & store on success', () => {
    const store = mockStore({});
    jest.mock('node-fetch', () => require('fetch-mock').sandbox())
    fetchMock.get('/login-success.json', 200)
    store.dispatch(loginRequest('test@test.com', 'testpassword'))
      .then((res) => {
        console.log(res);
      })
      .then(() => {
        expect(store.getActions()[0].toEqual(loginSuccess()));
      })
      .catch(() => {
        expect(store.getActions()[0].toEqual(loginFailure()))
      })
  });
});

describe('Tests for login([email], [password]) function', () => {
  it('Should return a complete Redux Action object', () => {
    expect(login('test@gmail.com', '1234')).toEqual({
      type: LOGIN, user: {email: 'test@gmail.com', password: '1234'}
    });
  });
});

describe('Tests for logout() function', () => {
  it('Should return a complete Redux Action object', () => {
    expect(logout()).toEqual({ type: LOGOUT });
  });
});

describe('Tests for displayNotificationDrawer() function', () => {
  it('Should return a complete Redux Action object', () => {
    expect(displayNotificationDrawer()).toEqual({ type: DISPLAY_NOTIFICATION_DRAWER });
  });
});

describe('Tests for hideNotificationDrawer() function', () => {
  it('Should return a complete Redux Action object', () => {
    expect(hideNotificationDrawer()).toEqual({ type: HIDE_NOTIFICATION_DRAWER });
  });
});