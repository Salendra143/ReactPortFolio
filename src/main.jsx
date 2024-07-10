import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Project from './components/Project.jsx'
import Contact from './components/Contact.jsx'
import Skills from './components/Skills.jsx'


const appRouter = createBrowserRouter([
      {
        path: '/',
        element: <App/>
      },
      {
        path: '/project',
        element: <Project/>
      },
      {
        path: '/skills',
        element: <Skills/>
      },
      {
        path: '/contact',
        element: <Contact/>
      }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>,
)
