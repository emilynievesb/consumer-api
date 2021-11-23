import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <Nav>
      <Nav.Item>
        <Link className="nav-link" to="/icecream">
          Helados
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link className="nav-link" to="/icecream/create">
          crear Helados
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link className="nav-link" to="/icecream/update">
          actualizar Helados
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link className="nav-link" to="/icecream/delete">
          Eliminar Helados
        </Link>
      </Nav.Item>
    </Nav>
  );
};

export default Menu;
