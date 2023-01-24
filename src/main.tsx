import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import './style.scss'; // for non component elements
import './components/Keyboard/keyboard.scss'
import './components/DialogMessage/DialogMessage.scss'
import './components/Header/Header.scss'
import './components/SignInForm/SignInForm.scss'
import './components/Tiles/Tiles.scss'
import './components/Home/Home.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
              <RouterProvider router={router} />
          // </React.StrictMode>
)
