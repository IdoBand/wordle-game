import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Home } from './components/Home'
import { WordleApp } from './components/WordleApp';
import SignInForm from './components/SignInForm';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path:'/App',
                element: < WordleApp/>
            },
            {
                path:'/SignInForm',
                element: <SignInForm />
            }

        ]
    }
])