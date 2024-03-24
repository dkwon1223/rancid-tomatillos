import React from 'react'
import '../styles/ErrorMessage.scss';

export default function ErrorMessage({ error, errorStatus }) {
  return (
    <div className='error-container'>
      <h1 className='error-message'>{error}<br/>STATUS CODE {errorStatus}</h1>
      <button onClick={() => {window.location.reload()}}>Back to Homepage</button> 
    </div>
  )
}

