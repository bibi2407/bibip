import React from "react";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import Logo from '../../node_modules/admin-lte/dist/img/AdminLTELogo.png'

const SidebarContainer = () => {
    return ( 
      <aside className="main-sidebar sidebar-dark-primary elevation-4" style={{backgroundColor:'rgb(82, 121, 111)'}}>
        <Link to={"/pagina-principal"} className="brand-link">
          <img src={Logo} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
          <span className="brand-text font-weight-light">CLIENTE </span>
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
              <Link to={"/pagina-principal"} className="d-block">SERVIPLUS</Link>
            </div>
          </div>
          <Menu></Menu>
        </div>
      </aside>

     );
}
 
export default SidebarContainer;