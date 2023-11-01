import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contato from './pages/Contato.jsx';
import Comentarios from './pages/Comentarios.jsx';
import Home from './pages/Home.jsx';
import Pessoa from './pages/Pessoa.jsx';
import Error404 from './pages/Error404.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error404 />,
    children: [
      {
        path: '/noticias',
        element: <div>Aqui estarão as noticias</div>
      },
      {
        path: '/contato',
        element: <Contato />
      },
      {
        path: '/comentarios',
        element: <Comentarios />
      },
      {
        path: '/pessoa/:nome',
        element: <Pessoa />
      }
    ]
  },  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
