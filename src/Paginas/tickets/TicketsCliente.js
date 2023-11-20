import React, { useState, useEffect } from "react";
import Navbar from "../../Componentes/Navbar";
import SidebarContainer from "../../Componentes/SidebarContainer";
import ContentHeader from "../../Componentes/ContentHeader";
import { Link } from "react-router-dom";
import Footer from "../../Componentes/Footer";
import APIInvoke from "../../Utils/APIInvoke";
import swal from "sweetalert";

const TicketsCliente = () => {
  const [tickets, setTickets] = useState([]);

  const cargarTickets = async () => {
    try {
      var response = await APIInvoke.invokeGET('/Tickets');
      console.log('Respuesta de la API:', response); 

      if (Array.isArray(response) && response.length > 0) {
        setTickets(response);
      } else {
          console.error('La respuesta de la API no contiene tickets.');
      }
  } catch (error) {
      console.error('Error al cargar los tickets:', error);
  }
};

  useEffect(() => {
    cargarTickets();
  }, []);


  const eliminarTicket  = async (e, id) => {
    e.preventDefault();
    const verificarExistenTicket = async (id) => {
      try {
          const response = await APIInvoke.invokeGET(`/Tickets?id=${id}`);
          if (response && response.length > 0) {
              return true; 
          }
          return false; 
      } catch (error) {
          console.error(error);
          return false; 
      }
  };

  const ticketExistente = await verificarExistenTicket(id);

  if (ticketExistente) {
      const response = await APIInvoke.invokeDELETE(`/Tickets/${id}`);
      const msg = "Su ticket fue eliminado correctamente";
      new swal({
          title: "Informacion",
          text: msg,
          icon: "success",
          buttons: {
              confirmar: {
                  text: "Ok",
                  value: true,
                  visible: true,
                  className: "btn btn-prymari",
                  closeModal: true,
              },
          },
      });

      cargarTickets();
    }else {
      const msg = 'El ticket no fue borrado correctamente';
            swal({
                title: 'Error',
                text: msg,
                icon: 'error',
                buttons: {
                    confirm: {
                        text: 'Ok',
                        value: true,
                        visible: true,
                        className: 'btn btn-danger',
                        closeModal: true
                    }
                }
            });
    }

  }

  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <SidebarContainer></SidebarContainer>
      <div className="content-wrapper">
        <ContentHeader
          titulo={"Mis Tickets"}
          breadCrumb1={"Inicio"}
          breadCrumb2={"Tickets"}
          ruta1={"/pagina-principal"}
        />

        <section className="content">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title"><Link to={"/tickets-crear"} className="btn btn-block bg-gradient" style={{backgroundColor:'rgb(53, 143, 128)', }} >Crear Ticket</Link>  </h3>
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                  title="Collapse"
                >
                  <i className="fas fa-minus" />
                </button>

                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="remove"
                  title="Remove"
                > 
                  <i className="fas fa-times" />
                </button>
              </div>
            </div>
            <div className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th style={{ width: "10%" }}>Id</th>
                    <th style={{ width: "20%" }}>Cliente</th>
                    <th style={{ width: "20%" }}>Servicio</th>
                    <th style={{ width: "10%" }}>Fecha</th>
                    <th style={{ width: "10%" }}>Hora</th>
                    <th style={{ width: "75%" }}>Descripción</th>
                  </tr>
                </thead>
                <tbody>
                  {
                     tickets.map((item) =>
                        <tr key ={item.id}>
                          <td>{item.id}</td>
                          <td>{item.solicitante}</td>
                          <td>{item.servicio}</td>
                          <td>{item.fecha}</td>
                          <td>{item.hora}</td>
                          <td>{item.descripcion}</td>
                          <td>
                            <button onClick={(e) => eliminarTicket(e, item.id)} className="btn btn-sm btn-danger">Borrar</button>
                          </td>
                      </tr>
                      )
                    }  
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default TicketsCliente;
