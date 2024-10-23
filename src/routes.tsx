import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";
import { NotFound } from "./pages/404";
import { Error } from "./pages/error";
import { Dashboard } from "./pages/app/dashboard/dashboard";
import { SignIn } from "./pages/auth/sign-in";
import { SignUp } from "./pages/auth/sign-up";
import { Products } from "./pages/app/products/products";

export const router = createBrowserRouter([

    {
        path: '/',
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {path: '/', element: <Dashboard />},
            {path: '/products', element: <Products />},
            // {path: '/products/edit', element: <Products />},
            // {path: '/products/delete', element: <Products />},
        ]
    },
    {
        path: '/',
        element: <AuthLayout />,
        children: [
            {path: '/sign-in', element: <SignIn />},
            {path: '/sign-up', element: <SignUp />}
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
])