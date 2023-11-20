import React from "react";
import NavbarAdmin from "../../Componentes/NavbarAdmin";
import SidebarContainerAdmin from "../../Componentes/SidebarContainerAdmin";
import ContentHeaderAdmin from "../../Componentes/ContentHeaderAdmin";
import Footer from "../../Componentes/Footer";

const ChatAdmin = () => {
    return ( 
        <div className="wrapper">
      <NavbarAdmin></NavbarAdmin>
      <SidebarContainerAdmin></SidebarContainerAdmin>
      <div className="content-wrapper">
        <ContentHeaderAdmin
          titulo={"CHAT ADMINISTRADOR"}
          breadCrumb1={"Tickets"}
          breadCrumb2={"Trazabilidad Solicitud"}
          ruta1={"/pagina-admin"}
        />
        <div className="col md-9 ml md-5">
        <div className="card direct-chat direct-chat- rgb(82, 121, 111)">
          <div className="card-header">
            <h3 className="card-title">Ticket N°1</h3>
            <div className="card-tools ">
              <button
                type="button"
                className="btn btn-tool"
                data-card-widget="collapse"
              >
                <i className="fas fa-minus" />
              </button>

              <button
                type="button"
                className="btn btn-tool"
                data-card-widget="remove"
              >
                <i className="fas fa-times" />
              </button>
            </div>
          </div>
          <div className="card-body">
            <div className="direct-chat-messages">
              <div className="direct-chat-msg">
                <div className="direct-chat-infos clearfix">
                  <span className="direct-chat-name float-left">
                    Alexander Pierce
                  </span>
                  <span className="direct-chat-timestamp float-right">
                    23 Jan 2:00 pm
                  </span>
                </div>
                <img className="direct-chat-img" src="dist/img/user1-128x128.jpg" alt="message user image"/>
                <div className="direct-chat-text">
                  Is this template really for free? That's unbelievable!
                </div>
              </div>
              <div className="direct-chat-msg right">
                <div className="direct-chat-infos clearfix">
                  <span className="direct-chat-name float-right">
                    Sarah Bullock
                  </span>
                  <span className="direct-chat-timestamp float-left">
                    23 Jan 2:05 pm
                  </span>
                </div>
                <img className="direct-chat-img" src="dist/img/user3-128x128.jpg" alt="message user image"/>
                <div className="direct-chat-text">You better believe it!</div>
              </div>
              <div className="direct-chat-msg">
                <div className="direct-chat-infos clearfix">
                  <span className="direct-chat-name float-left">
                    Alexander Pierce
                  </span>
                  <span className="direct-chat-timestamp float-right">
                    23 Jan 5:37 pm
                  </span>
                </div>
                <img className="direct-chat-img" src="dist/img/user1-128x128.jpg" alt="message user image" />
                <div className="direct-chat-text">
                  Working with AdminLTE on a great new app! Wanna join?
                </div>
              </div>
              <div className="direct-chat-msg right">
                <div className="direct-chat-infos clearfix">
                  <span className="direct-chat-name float-right">
                    Sarah Bullock
                  </span>
                  <span className="direct-chat-timestamp float-left">
                    23 Jan 6:10 pm
                  </span>
                </div>
                <img className="direct-chat-img" src="dist/img/user3-128x128.jpg" alt="message user image" />
                <div className="direct-chat-text">I would love to.</div>
              </div>
            </div>
            <div className="direct-chat-contacts">
              <ul className="contacts-list">

                
              </ul>
            </div>
          </div>
          <div className="card-footer">
            <form action="#" method="post">
              <div className="input-group">
                <input
                  type="text"
                  name="message"
                  placeholder="Responder ticket ..."
                  className="form-control"
                />
                <span className="input-group-append">
                  <button type="button" className="btn btn" style={{backgroundColor:'rgb(142, 125, 190)'}}>
                    Enviar
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
      <Footer></Footer>
    </div>
     );
}
 
export default ChatAdmin;