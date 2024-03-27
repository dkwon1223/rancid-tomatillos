import React from 'react'
import '../styles/Error.scss';
import { Link } from 'react-router-dom';
export default function NotFound() {
  return (
    <div className='error-container'>
        <h1>Page not found!</h1>
        <Link to={"/"}>Return Home</Link>
    </div>
  )
}
