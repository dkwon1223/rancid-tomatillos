import React from 'react'
import { useRouteError, Link } from 'react-router-dom';
import '../styles/Error.scss';

export default function MovieDetailsError() {
    const error = useRouteError();

    return (
      <div className='error-container'>
        <h1>Error</h1>
        <h2>{error.message}</h2>
        <Link to={"/"}>Return Home</Link>
      </div>
    )
}
