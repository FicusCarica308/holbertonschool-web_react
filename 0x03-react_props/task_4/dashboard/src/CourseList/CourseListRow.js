import React from 'react'
import PropTypes from 'prop-types';

function CourseListRow({isHeader, textFirstCell, textSecondCell}) {
  const fragment = <React.Fragment><th>{ textFirstCell }</th><th>{ textSecondCell }</th></React.Fragment>
  return(
    <tr>
      {isHeader === true ? {fragment}
      : <h1>junk</h1>}
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string,
  textSecondCell: PropTypes.string
}


CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
};


export default CourseListRow;
