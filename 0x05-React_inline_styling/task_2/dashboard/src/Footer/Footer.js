/* FOOTER COMPONENT PROP */
import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils.js';

export default function Footer(props) {
  return (
    <div className={props.className}>
      <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
    </div>
  );
}
