import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Selectedbook from './Components/Selectedbook.jsx'
import Hero from './Components/Hero.jsx'
import Books from './Components/Books.jsx'
import Bookdetils from './Components/Bookdetils.jsx'
import LoadingSpinner from './Components/LoadingSpinner.jsx'
const Router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,

    children: [
      {
        index: true,
        element: (
          <div>
            <Hero></Hero>
            <Books></Books>
          </div>

        ),
        loader: () => fetch('/booksData.json'),

      },
      {
        path: '/list_books',
        Component: Selectedbook,
      },

      {
        path: "book-detils/:id", // dyanmic routing path decilare here
        element: <Bookdetils />,
        loader: ({ params }) => {
          return fetch("/booksData.json")
            .then(res => res.json())
            .then(data => data.find(book => book.bookId === Number(params.id)));
        }

      },






    ]
  }



]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={Router}></RouterProvider>
  </StrictMode>,
)
