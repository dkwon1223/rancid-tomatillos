import React from 'react'
import { useRouteError } from 'react-router-dom';

export default function MovieDetailsError() {
    const error = useRouteError();

    return (
      <div className='error-container'>
        <h1>Error</h1>
        <h2>{error.message}</h2>
      </div>
    )
}
