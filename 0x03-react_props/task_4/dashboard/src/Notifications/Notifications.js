/* Notifications element for App.js... */
import React from 'react';
import closeIcon from '../assets/close-icon.png';
import './Notifications.css'
import { getLatestNotification } from '../utils/utils.js';
import NotificationItem from './NotificationItem';

export default function Notifications() {
  return (
    <div className='Notifications'>
      <p>Here is the list of notifications</p>
      <ul className='notification-list'>
        <NotificationItem type='default' value='New course available' />
        <NotificationItem type='urgent' value='New resume available' />
        <NotificationItem type='urgent' html={ getLatestNotification() } />
      </ul>
      <button
          aria-label="Close"
          onClick={() => {
            console.log('Close button has been clicked');
          }}
          style={{
            position: 'absolute',
            right: '20px',
            top: '15px',
            width: '20px',
            height: '20px',
            background: 'none',
            border: 'none'
          }}
        >
        <img src={closeIcon} alt='closeIcon' style={{width: '20px', height: '20px',}} />
      </button>
    </div>
  );
}
