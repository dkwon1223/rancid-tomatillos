import '../styles/App.scss';
import { useState } from "react";
import RootLayout from './RootLayout';
import MoviesArea, { moviesLoader } from '../components/MoviesArea';
import MovieDetails, { movieDetailsLoader } from '../components/MovieDetails';
import NotFound from './NotFound';
import MoviesError from './MoviesError';
import MovieDetailsError from './MovieDetailsError';

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
          errorElement={<MoviesError />}
        />
        <Route
          path="/movies/:movieId" 
          element={<MovieDetails />}
          loader={ movieDetailsLoader }
          errorElement={<MovieDetailsError />}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  )
  
  return (
    <RouterProvider router={router}/>
  )
}
