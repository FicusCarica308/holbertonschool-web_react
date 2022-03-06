import React from 'react';
import { getLatestNotification } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';

const listCourses = [
  {id: 1, name: "ES6", credit: 60},
  {id: 2, name: "Webpack", credit: 20},
  {id: 3, name: "React", credit: 40}
]

const listNotifications = [
  {id: 1, type: "default", value: "New course available"},
  {id: 2, type: "urgent", value: "New resume available"},
  {id: 3, type: "urgent", __html: {__html: getLatestNotification()}},
]

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayDrawer: false,
    }
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
  }

  handleDisplayDrawer() {
    this.setState({
      displayDrawer: true
    })
  }

  handleHideDrawer() {
    this.setState({
      displayDrawer: false
    })
  }
  
  handleKeyDown(e) {
    if (e.ctrlKey && e.code == "KeyH") {
      e.preventDefault()
      alert("Logging you out");
      this.props.logOut();
    }
  }
  
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }
  
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }
  
  render() {
    return (
      <>
        <Notifications listNotifications={listNotifications}
                      displayDrawer={this.state.displayDrawer}
                      handleDisplayDrawer={this.handleDisplayDrawer}
                      handleHideDrawer={this.handleHideDrawer}
                      />
        <div className={css(styles.flexFullHeight)}>
        <Header className={css(styles.appHeader)}/>
        { this.state.isLoggedIn ? (
          <BodySectionWithMarginBottom title="Course list">
          <CourseList listCourses={listCourses} className={css(styles.bodyHeight)}/>
          </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
            <Login />
            </BodySectionWithMarginBottom>
            )
          }
          <BodySection title="News from the school">
          <p>
            Nothing Yet !
          </p>
          </BodySection>
          <Footer className={css(styles.footer)}/>
        </div>
        </>
        )
      }
    }
    
    
    App.propTypes = {
      isLoggedIn: PropTypes.bool,
      logOut: PropTypes.func
    }
    
    App.defaultProps = {
      isLoggedIn: false,
      logOut: () => {
        return(undefined);
      }
    }
    
    const styles = StyleSheet.create({
      flexFullHeight: {
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      },
      
      bodyHeight: {
        height: "70%",
      },
      
      appHeader: {
        display: "flex",
        alignItems: "center",
        borderBottom: "3px solid #e0354b",
        color: "#e0354b",
        fontSize: "1.5rem",
        fontWeight: "bold",
        height: "25%",
      },
      
      footer: {
        position: "absolute",
        bottom: "0",
        width: "100%",
        borderTop: "3px solid var(--holberton-red) !important",
        textAlign: "center",
        padding: "16px 0",
      }
    });
    
    
    export default App;