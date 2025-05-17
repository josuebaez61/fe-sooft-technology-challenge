import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.tsx";
import StoreProvider from "./StoreProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StoreProvider>
      <BrowserRouter basename="/fe-sooft-technology-challenge/">
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  </StrictMode>
);
