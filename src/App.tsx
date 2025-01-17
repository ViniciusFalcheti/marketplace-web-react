import './../globals.css'
import { QueryClientProvider } from "@tanstack/react-query";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { queryClient } from "./lib/react-query";
import { Toaster } from 'sonner';


export function App() {

  return (
    <HelmetProvider>
        <Helmet titleTemplate='%s | marketplace' />
        <Toaster richColors />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
    </HelmetProvider>
  )
}
