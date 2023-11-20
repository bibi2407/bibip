import React from "react";
import NavbarAdmin from "../Componentes/NavbarAdmin";
import SidebarContainerAdmin from "../Componentes/SidebarContainerAdmin";
import ContentHeaderAdmin from "../Componentes/ContentHeaderAdmin";
import { Link } from "react-router-dom";
import Footer from "../Componentes/Footer";

const PaginaAdmin = () => {
    return ( 
        <div className="wrapper">
      <NavbarAdmin></NavbarAdmin>
      <SidebarContainerAdmin></SidebarContainerAdmin>
      <div className="content-wrapper">

        <ContentHeaderAdmin
            titulo={"Bienvenido Admin"}
            breadCrumb1={"Inicio"}
            breadCrumb2={"Dashboard"}
            ruta1={"/pagina-admin"}
        />
        <div className="card card-solid">
    <div className="card-body pb-0">
        <div className="row">
        <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
            <div className="card bg-light d-flex flex-fill">
            <div className="card-header text-muted border-bottom-0">
                TICKET N°1
            </div>
            <div className="card-body pt-0">
                <div className="row">
                <div className="col-9 ml-5">
                    <h2 className="lead"><b>Bibi hernandez</b></h2>
                    
                    <p className="text-muted text-sm"><b>Servicio: </b> Internet </p>
                    <ul className="ml-4 mb-0 fa-ul text-muted">
                    <li className="small"><span className="fa-li"><i className="fas fa-lg fa-building" /></span> Fecha: 15-05-2023</li>&nbsp;
                    <li className="small"><span className="fa-li"><i className="fas fa-lg fa-phone" /></span> Hora: 08:00</li>
                    </ul>
                    &nbsp;
                    <p className="text-muted text-sm"><b>Descripción: </b> No tengo </p>
                </div>
                </div>
            </div>
            <div className="card-footer">   
                <div className="text-right">
                <Link href="#" className="btn btn-sm bg-teal">
                    <i className="fas fa-comments" />
                </Link> &nbsp; &nbsp; 
                <Link to={"/chat-admin"} className="btn btn-sm btn" style={{backgroundColor:'rgb(142, 125, 190)'}}>
                    <i className="fas fa-reply" /> Responder
                </Link>
                </div>
            </div>
            </div>
        </div>
        </div>
  </div>
  <div className="card-footer">
    <nav aria-label="Contacts Page Navigation">
      <ul className="pagination justify-content-center m-0">
        <li className="page-item active" ><Link to={"#"} className="page-link" style={{backgroundColor:'rgb(142, 125, 190)'}}>1</Link></li>
        <li className="page-item"><Link to={"#"} className="page-link" >2</Link></li>
        <li className="page-item"><Link to={"#"} className="page-link" >3</Link></li>
      </ul>
    </nav>
  </div>
</div>

      </div>
      <Footer></Footer>
    </div>

     );
}
 
export default PaginaAdmin;