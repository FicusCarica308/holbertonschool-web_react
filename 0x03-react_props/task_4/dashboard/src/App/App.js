import React from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Login from '../Login/Login'
import CourseList from '../CourseList/CourseList'
import PropTypes from 'prop-types';

function App({isLoggedIn}) {
  return (
    <React.Fragment>
      <div className="App">
      <root-notifications>
        <Notifications />
      </root-notifications>
        <Header />
        <div className='App-body'>
          {isLoggedIn === false ? (
            <React.Fragment>
              <p>Login to access the full dashboard</p>
              <Login />
            </React.Fragment>
          ) : (
            <CourseList />
          )}
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
};

App.defaultProps = {
  isLoggedIn: false
};

export default App;
