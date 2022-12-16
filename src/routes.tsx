import { createBrowserRouter } from 'react-router-dom';

import { Home } from './components/Home'
import { WordleApp } from './components/WordleApp';
import Header from './components/Header';
import SignInForm from './components/SignInForm';



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Header />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path:'/App',
                element: <WordleApp />
            },
            {
                path:'/SignInForm',
                element: <SignInForm />
            }

        ]
    }
])