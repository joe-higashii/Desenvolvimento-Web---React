import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import CadastroComentario from './pages/CadastroComentario.jsx';
import Comentarios from './pages/Comentarios.jsx';
import Comentario from './pages/Comentario.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: '/cadastrar',
        element: <CadastroComentario />
      },
      {
        path: '/comentarios',
        element: <Comentarios />
      },
      {
        path: '/comentario/:id',
        element: <Comentario />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
