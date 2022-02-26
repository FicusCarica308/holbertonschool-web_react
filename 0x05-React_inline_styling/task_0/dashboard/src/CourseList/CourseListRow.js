import React from 'react'
import PropTypes from 'prop-types';

function CourseListRow({isHeader, textFirstCell, textSecondCell}) {
  return(
    <tr>
      {isHeader === true ? (
        textSecondCell === null ? (
          <th colSpan={2} style={{backgroundColor: '#deb5b545'}}>{textFirstCell}</th>
        ) : (
          <React.Fragment>
            <th>{ textFirstCell }</th>
            <th>{ textSecondCell }</th>
          </React.Fragment>
        )
      ) : (
        <React.Fragment>
          <td style={{backgroundColor: '#f5f5f5ab'}}>{ textFirstCell }</td>
          <td>{ textSecondCell }</td>
        </React.Fragment>
      )}
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])
}


CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
};


export default CourseListRow;
