import React from 'react'
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function RootLayout({searchQuery, setSearchQuery}) {

  return (
    <div>
        <header>
            <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
        </header>
        <main className='App'>
            <Outlet />
        </main>
    </div>
  )
}

RootLayout.propTypes = {
  searchQuery: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  setSearchQuery: PropTypes.func.isRequired
}

