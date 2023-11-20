import React, { useState, useEffect } from "react";
import Navbar from "../../Componentes/Navbar";
import SidebarContainer from "../../Componentes/SidebarContainer";
import ContentHeader from "../../Componentes/ContentHeader";
import Footer from "../../Componentes/Footer";
import { useNavigate } from "react-router-dom";
import APIInvoke from "../../Utils/APIInvoke";
import swal from "sweetalert";


const TicketCrear = () => {

  const navigate = useNavigate();

    const [ticket, setTicket] = useState({
        solicitante: "",
        servicio: "",
        fecha: "",
        hora: "",
        descripcion: ""
      });
    
      const { solicitante, servicio, fecha, hora, descripcion } = ticket;
    
      const onChange = (e) => {
        setTicket({
          ...ticket,
          [e.target.name]: e.target.value,

        });
      };
    
      useEffect(() => {
        document.getElementById("solicitante");
      }, []);
      
    
      const crearTicket = async () => {
        
        const verificarExiste = async (solicitante) =>{
          try {
            const response = await APIInvoke.invokeGET(`/Tickets?solicitante=${solicitante}`);
            if (response && response.length > 0) {
              return true;
            }else{
              return false;
            }
          }catch(error){
            console.error(error);
            return false;
          }
        };
        
        if(verificarExiste) {
            
          const ticketExistente = await verificarExiste(solicitante);
    
            if (ticketExistente) {
                const msg = 'El ticket ya existe';
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
            } else {
                const data = {
                    solicitante: ticket.solicitante,
                    servicio: ticket.servicio,
                    fecha: ticket.fecha,
                    hora: ticket.hora,
                    descripcion: ticket.descripcion
                };
    
                const response = await APIInvoke.invokePOST(`/Tickets`, data);
                
                navigate("/tickets-cliente")
                const msg = "Su ticket fue creado correctamente";
                swal({
                    title: "Información",
                    text: msg,
                    icon: "success",
                    buttons: {
                        confirm: {
                            text: "Ok",
                            value: true,
                            visible: true,
                            className: "btn btn-danger",
                            closeModal: true,
                        }
                    }
                });
    
                setTicket({
                    solicitante: "",
                    servicio: "",
                    fecha: "",
                    hora: "",
                    descripcion: ""
                });
            }
        };
      };
    
      const onSubmit = (e) => {
        e.preventDefault();
        crearTicket();
      };
    


  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <SidebarContainer></SidebarContainer>
      <div className="content-wrapper">
        <ContentHeader
          titulo={"Creación del Ticket"}
          breadCrumb1={"Mis Tickets"}
          breadCrumb2={"Creación Ticket"}
          ruta1={"/tickets-cliente"}
        />


        <section className="content">
        <form onSubmit={onSubmit}>
          <div className="card">
          
            <div className="card-header" style={{backgroundColor:'rgb(86, 171, 145)'}}>
            <h3 className="card-title">TICKET N°1</h3>
              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Disminuir">
                  <i className="fas fa-minus" />
                </button>

                <button type="button" className="btn btn-tool" data-card-widget="remove" title="Cerrar">
                  <i className="fas fa-times" />
                </button>
              </div>
            </div>
            
            <div className="card-body">
                
              <section className="content">
                <div className="row">
                  <div className="col-md-11 ml-md -5">
                      <div className="card-body">

                        <div className="form-group">
                          <label htmlFor="inputSolicitante">Solicitante</label>
                          <input type="text" className="form-control" 
                            id="inputSolicitante"
                            name="solicitante"
                            placeholder="Nombre del cliente" 
                            value={solicitante} 
                            onChange={onChange} required/>
                          </div>

                        <div className="form-group">
                          <label htmlFor="inputServicio">Servicio</label>
                          <input type="text" className="form-control"
                            id="inputServicio"
                            name="servicio"
                            placeholder="Servicio"   
                            value={servicio}
                            onChange={onChange}
                            required/>
                        </div>
                        

                        <div className="form-group">
                          <label htmlFor="inputFecha">Fecha</label>
                          <input type="date" className="form-control"
                            id="inputFecha"
                            name="fecha"
                            placeholder="Fecha del servicio"   
                            value={fecha}
                            onChange={onChange}
                            required/>
                        </div>

                        <div className="form-group">
                          <label htmlFor="inputHora">Hora</label>
                          <input type="time" className="form-control"
                            id="inputHora"
                            name="hora"
                            placeholder="Hora del servicio"   
                            value={hora}
                            onChange={onChange}
                            required/>
                        </div>

                        <div className="form-group">
                          <label htmlFor="inputDescripcion">
                            Descripción del Servicio
                          </label>
                          <textarea className="form-control" rows={4}
                            id="inputDescripcion"
                            name="descripcion"
                            placeholder="Descripción del servicio"    
                            value={descripcion}
                            onChange={onChange}
                            required/>
                        </div>

                      </div>
                  </div>
                  
                </div>
                <div className="row">
                  <div className="col-12">
                    <input
                      type="submit"
                      defaultValue="Create new Project"
                      className="btn btn-success float-right"
                      style={{backgroundColor:'rgb(53, 143, 128)'}}
                    />
                  </div>
                </div>
              </section>
            </div>
        </div>
        </form>
        </section>
      </div>
      &sbnp;
      <Footer></Footer>
    </div>
  );
};

export default TicketCrear;
