
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'

import './index.css'
import App from './App.tsx'
import HomePage from './pages/Home/HomePage.tsx'
import NumerosPage from './pages/Numeros/NumerosPage.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
    {path: "/", element: <HomePage />},
    {path: "/numeros", element: <NumerosPage />}
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)



