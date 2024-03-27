import React from 'react'
import '../styles/Error.scss';
import { useRouteError } from 'react-router-dom';


export default function MoviesError() {
  const error = useRouteError();
  
  return (
    <div className='error-container'>
      <h1>Error</h1>
      <h2>{error.message}</h2>
    </div>
  )
}

