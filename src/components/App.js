import '../styles/App.scss';
import RootLayout from './RootLayout';
import MoviesArea, { moviesLoader } from '../components/MoviesArea';
import MovieDetails, { movieDetailsLoader } from '../components/MovieDetails';
import ErrorMessage from './ErrorMessage';
import { useState } from "react";

import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider, 
} from 'react-router-dom';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>}>
        <Route 
          index 
          element={<MoviesArea searchQuery={searchQuery} />} 
          loader={ moviesLoader }
        />
        <Route 
          exact path="/:movieId" 
          element={<MovieDetails />}
          loader={ movieDetailsLoader }
        />
        <Route path="*" element={<ErrorMessage />}/>
      </Route>
    )
  )
  
  return (

    <RouterProvider router={router}/>
  )
}
