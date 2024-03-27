import React from 'react'
import '../styles/ErrorMessage.scss';
import PropTypes from 'prop-types';

export default function ErrorMessage() {

  return (
    <div className='error-container'>
      {/* <h1 className='error-message'>{error}<br/>STATUS CODE {errorStatus}</h1>
      <button onClick={() => {window.location.reload()}}>Back to Homepage</button>  */}
      <h1>Page not found!</h1>
    </div>
  )
}

// ErrorMessage.propTypes = {
//   error: PropTypes.string.isRequired,
//   errorStatus: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
// }