import React, {Fragment} from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from "../Paginas/auth/login";
import CrearCuenta from "../Paginas/auth/CrearCuenta";
import PaginaPrincipal from "../Paginas/PaginaPrincipal";
import TicketsCliente from '../Paginas/tickets/TicketsCliente';
import TicketsCrear from "../Paginas/tickets/TicketsCrear";
import ChatCliente from "../Paginas/auth/ChatCliente";
import PaginaAdmin from "../Paginas/PaginaAdmin";
import ChatAdmin from "../Paginas/auth/ChatAdmin";


function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/crear-cuenta" element={<CrearCuenta />} />
          <Route path="/pagina-principal" element={<PaginaPrincipal />} />
          <Route path="/pagina-admin" element={<PaginaAdmin />} />
          <Route path="/tickets-cliente" element={<TicketsCliente />} />
          <Route path="/tickets-crear" element={<TicketsCrear />} />
          <Route path="/chat-cliente" element={<ChatCliente />} />
          <Route path="/chat-admin" element={<ChatAdmin />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
