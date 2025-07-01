import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Importe suas páginas// Supondo que você tenha uma página Home
// Nossa nova página
import Home from "./pages/Home";
import { ThankYou } from "./pages/ThankYou";
import { SegEcommerce } from "./pages/SegEcommerce";

// Crie o roteador
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, // Rota para a sua landing page principal
  },
  {
    path: "/obrigado", // A nova rota!
    element: <ThankYou />,
  },
  {
    path: "/seg-eccomerce", // A nova rota!
    element: <SegEcommerce />,
  },
  // Adicione outras rotas aqui, se necessário
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
