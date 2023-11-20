import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../node_modules/admin-lte/dist/img/AdminLTELogo.png'
import MenuAdmin from "./MenuAdmin";

const SidebarContainerAdmin = () => {
    return ( 
        <aside className="main-sidebar sidebar-dark-primary elevation-4" style={{backgroundColor:'rgb(142, 125, 190)'}}>
        <Link to={"/pagina-admin"} className="brand-link">
          <img src={Logo} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
          <span className="brand-text font-weight-light">ADMINISTRADOR </span>
        </Link>
        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="info">
              &nbsp;
            </div>
        
            <div className="info">
            &nbsp;
            </div>
        
            <div className="info">
              <Link to={"/pagina-admin"} className="d-block">SERVIPLUS</Link>
            </div>
          </div>
          <MenuAdmin></MenuAdmin>
        </div>
      </aside>
     );
}
 
export default SidebarContainerAdmin;