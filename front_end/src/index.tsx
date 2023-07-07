import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CadastroComputadores from './components/pages/cadastrarComputadores';
import ListarComputadores from './components/pages/listarComputadores';

const routes = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <ListarComputadores />,
      },
      {
        path: "/cadastrar",
        element: <CadastroComputadores />,
      },
      {
        path: "/listar",
        element: <ListarComputadores />
      },   
    ],
  },
]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
