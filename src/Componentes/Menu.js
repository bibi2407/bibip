import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
    return (  

  <nav className="mt-2">
    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
      <li className="nav-item">
        <Link to={"/pagina-principal"} className="nav-link">
        <i className=" fas fa-th">&nbsp;
          <p>
               Inicio
          </p>
        </i>
        </Link>
      </li>
      <li className="nav-item">
        <Link to={"/tickets-cliente"} className="nav-link">
        <i className="fas fa-ticket"> &nbsp;
          <p>
               Tickets
          </p>
        </i>
        </Link>
      </li>
      <li className="nav-item">
        <Link to={"/chat-cliente"} className="nav-link">
        <i className="fas fa-comments">&nbsp;<p>  Chat  </p></i>
        </Link>
      </li>
    </ul>
  </nav>
        
    );
}
 
export default Menu;