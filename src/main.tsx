import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./App.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
]);

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}/>
)
