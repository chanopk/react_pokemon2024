import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './compoments/Home';
import PokemonDetail from './compoments/PokemonDetail';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/pokemon-detail/:entry_number",
          element: <PokemonDetail />,
        },
      ],
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

export default App
