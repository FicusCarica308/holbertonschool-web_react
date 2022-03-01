import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import BodySection from './BodySection'

const styles = StyleSheet.create({
  sectionMargin: {
    margin: '40px'
  }
});

// Props {title: string, children: htmlTag}
class BodySectionWithMarginBottom extends React.Component {
  render () {
    return (
      <>
        <div className={'bodySectionWithMargin ' + css(styles.sectionMargin)}>
          <BodySection {...this.props} />
        </div>
      </>
    );
  }
}

BodySectionWithMarginBottom.defaultProps = {
  title: 'default',
  children: <></>,
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
}

export default BodySectionWithMarginBottom;