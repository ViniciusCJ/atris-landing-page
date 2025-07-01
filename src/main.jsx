// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
// import { HelmetProvider } from "react-helmet-async";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <HelmetProvider>
//       <App />
//     </HelmetProvider>
//   </StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css"; // ou seu arquivo de css global
import { HelmetProvider } from "react-helmet-async"; // Importe o HelmetProvider
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
