import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import Home from './pages/home.tsx';
import Busca from "./pages/busca.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <Home /> */}
    <Busca />
  </StrictMode>
);
