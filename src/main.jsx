import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider }from 'react-router-dom'
import { Test } from './pages/Test.jsx'
import { Main } from './pages/Main.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>
  },
  {
    path: '/test',
    element: <Test/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
