import { createHashRouter, RouterProvider } from 'react-router-dom';

import RootPage from './RootPage';
import Home from './Home';

const router = createHashRouter([
    {
        path: '/',
        element: <RootPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/create',
                element: <h1>Add!</h1>,
            },
            {
                path: '/update',
                element: <h1>Update!</h1>,
            },
            {
                path: '/pinned',
                element: <h1>Pinned!</h1>,
            },
        ],
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
