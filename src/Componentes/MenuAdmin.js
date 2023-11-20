import React from "react";
import { Link } from "react-router-dom";

const MenuAdmin = () => {
    return ( 
        <nav className="mt-2">
    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
      <li className="nav-item">
        <Link to={"/pagina-admin"} className="nav-link">
        <i className=" fas fa-th"> &nbsp;
          <p>
               Inicio
          </p>
        </i>
        </Link>
      </li>
    </ul>
  </nav>
     );
}
 
export default MenuAdmin;