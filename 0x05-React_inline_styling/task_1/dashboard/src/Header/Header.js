/* HEADER COMPONENT PROP */
import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import holbertonLogo from '../assets/holberton-logo.jpg';

const styles = StyleSheet.create({
  headerStyle: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '3px solid rgb(207, 8, 8)',
  },
  headerHStyle: {
    color: 'rgb(207, 8, 8)',
    fontWeight: '660',
  },
  logo: {
    width: '200px',
  }
});

export default function Header() {
  return (
    <div className={'App-header ' + css(styles.headerStyle)}>
      <img src={holbertonLogo} className={'holberton-logo ' + css(styles.logo)} alt='logo' />
      <h1 className={css(styles.headerHStyle)}>School dashboard</h1>
    </div>
  );
}
