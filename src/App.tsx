import { Routes, Route } from "react-router-dom";
import "./App.css";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
import Skills from "./pages/skills/Skills";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Utilities from "./pages/utilities/Utilities";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos" element={<Projects />} />
        <Route path="/habilidades" element={<Skills />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/utiles" element={<Utilities />} />
      </Routes>
    </>
  );
}

export default App;
