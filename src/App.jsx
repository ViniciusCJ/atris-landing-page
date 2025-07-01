import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Importe suas páginas// Supondo que você tenha uma página Home
// Nossa nova página
import Home from "./pages/Home";
import { ThankYou } from "./pages/ThankYou";

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
  // Adicione outras rotas aqui, se necessário
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
