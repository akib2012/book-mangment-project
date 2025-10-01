import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
const Router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    loader: () =>  fetch('/booksData.json'),
  }



]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={Router}></RouterProvider>
  </StrictMode>,
)
