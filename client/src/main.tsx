import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthContextProvider } from "./context/AuthContext.tsx";
import { Toaster } from "sonner";
import { HelmetProvider } from "react-helmet-async";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <BrowserRouter>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
        <Toaster richColors expand={true} position="top-right" closeButton/>
      </BrowserRouter>
      </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
