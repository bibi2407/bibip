import React from "react";
import Navbar from "../Componentes/Navbar";
import SidebarContainer from "../Componentes/SidebarContainer";
import ContentHeader from "../Componentes/ContentHeader";
import Footer from "../Componentes/Footer";
import { Link } from "react-router-dom";


const PaginaPrincipal = () => {
  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <SidebarContainer></SidebarContainer>
      <div className="content-wrapper">

        <ContentHeader
            titulo={"Bienvenido Cliente"}
            breadCrumb1={"Inicio"}
            breadCrumb2={"Dashboard"}
            ruta1={"/pagina-principal"}
        />

        <section className="content">
          <div className="container-fluid">
            <div className="row">
              
              <div className="col-lg-3 col-6" >
                <div className="small-box bg-info" >
                  <div className="inner" style={{backgroundColor:'rgb(86, 171, 145)'}}>
                    <h3>Mis ticktes</h3>
                    <p>&nbsp;</p>
                  </div>
                  <div className="icon">
                    <i className="fa fa-edit" />
                  </div>
                  <Link to={"/tickets-cliente"} className="small-box-footer" style={{backgroundColor:'rgb(53, 143, 128)'}}>Crear Nuevo Ticket <i className="fas fa-arrow-circle-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default PaginaPrincipal;
