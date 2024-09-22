import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import PaginaPrincipal from './pages/Principal';
import Servicos from './pages/serviços';
import Espaco from './pages/espaco';
import Contato from './pages/contato';


//Usando todas as rotas no próprio main:
const router = createBrowserRouter([
  {
    path: '/',
    element: <PaginaPrincipal/>
  },
  {
    path: '/serviços',
    element: <Servicos/>
  },
  {
    path: '/espaço',
    element: <Espaco/>
  },
  {
    path: '/contato',
    element: <Contato/>
  }
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
