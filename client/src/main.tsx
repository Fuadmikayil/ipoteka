import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { routers } from './routers/index.tsx'

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={routers} />
)
