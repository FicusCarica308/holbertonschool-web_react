import React from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Login from '../Login/Login'
import CourseListRow from '../CourseList/CourseListRow'

function App() {
  return (
    <React.Fragment>

      <CourseListRow />

      <root-notifications>
        <Notifications />
      </root-notifications>
      <div className="App">
        <Header />
        <div className='App-body'>
          <p>Login to access the full dashboard</p>
          <Login />
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
