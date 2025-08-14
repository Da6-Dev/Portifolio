import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Sobre from "./pages/about";
import Projetos from "./pages/projects";
import Habilidades from "./pages/skills";
import Contato from "./pages/contact";

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/sobre">Sobre</Link> |{" "}
        <Link to="/projetos">Projetos</Link> |{" "}
        <Link to="/habilidades">Habilidades</Link> |{" "}
        <Link to="/contato">Contato</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/habilidades" element={<Habilidades />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  );
}
