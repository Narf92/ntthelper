import { Link } from "react-router-dom";
import "./Navbar.css";

const links = [
  {
    path: "/",
    description: "Inicio",
  },
  {
    path: "/proyectos",
    description: "Proyectos",
  },
  {
    path: "/habilidades",
    description: "Habilidades",
  },
  {
    path: "/contacto",
    description: "Contacto",
  },
  {
    path: "/utiles",
    description: "Utiles",
  },
];

const navBarItems = links.map((x) => (
  <Link className="menu-item" to={x.path}>
    {x.description}
  </Link>
));

function Navbar() {
  return <nav>{navBarItems}</nav>;
}

export default Navbar;
