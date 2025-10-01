import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Selectedbook from './Components/Selectedbook.jsx'
import Hero from './Components/Hero.jsx'
import Books from './Components/Books.jsx'
import Bookdetils from './Components/Bookdetils.jsx'
const Router = createBrowserRouter([
  {
    path: '/',
    Component: App,

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
        path: "book-detils/:id",
        element: <Bookdetils />,
        loader: async ({ params }) => {
          const res = await fetch("/booksData.json");
          const data = await res.json();

          // bookId দিয়ে খুঁজতে হবে
          return data.find(book => book.bookId === Number(params.id));
        }
      }





    ]
  }



]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={Router}></RouterProvider>
  </StrictMode>,
)
