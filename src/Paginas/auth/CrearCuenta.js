import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import APIInvoke from "../../Utils/APIInvoke";
import swal from "sweetalert";

const CrearCuenta = () => {
  const [usuario, setUsuario] = useState({
    rol: 1,
    nombre: "",
    email: "",
    contraseña: "",
    confirmar: ""
  });

  const { rol, nombre, email, contraseña, confirmar } = usuario;

  const onChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    document.getElementById("nombre").focus();
  }, []);

  const crearcuenta = async () => {
    
    const verificarExistenciaUsuario = async (nombre) =>{
      try {
        const response = await APIInvoke.invokeGET(`/User?nombre=${nombre}`);
        if (response && response.length > 0) {
          return true;//Existe
        }else{
          return false;//No existe
        }
      }catch(error){
        console.error(error);
        return false;//muestra el error
      }
    };

    const verificarExistenciaEmail = async (email) =>{
      try {
        const response = await APIInvoke.invokeGET(`/User?email=${email}`);
        if (response && response.length > 0) {
          return true;//Existe
        }else{
          return false;//No existe
        }
      }catch(error){
        console.error(error);
        return false;//muestra el error
      }
    };

    if (contraseña !== confirmar) {
      const msg = "Las contraseñas son diferentes.";
      swal({
        title: "Error",
        text: msg,
        icon: "error",
        buttons: {
          confirm: {
            text: "OK",
            value: true,
            visible: true,
            className: "btn btn-danger",
            closeModal: true
          }
        }
      });
    } else if (contraseña.length < 6) {
      const msg = "La contraseña debe ser de 6 caracteres.";
      swal({
        title: "Error",
        text: msg,
        icon: "error",
        buttons: {
          confirm: {
            text: "OK",
            value: true,
            visible: true,
            className: "btn btn-danger",
            closeModal: true
          }
        }
      });
    } else {
        
      const usuarioExistente = await verificarExistenciaUsuario(nombre);
      const emailExistente = await verificarExistenciaEmail(email);

        if (usuarioExistente) {
            const msg = 'El usuario ya existe';
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
        } else if(emailExistente){
          const msg = 'El usuario ya existe';
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
                rol : usuario.rol,
                nombre: usuario.nombre,
                email: usuario.email,
                contraseña: usuario.contraseña,
            };

            const response = await APIInvoke.invokePOST(`/User`, data);

            const msg = "El usuario fue creado correctamente";
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

            setUsuario({
                rol: 1 ,
                nombre: "",
                email: "",
                contraseña: "",
                confirmar: "",
            });
        }
    };
  };

  const onSubmit = (e) => {
    e.preventDefault();
    crearcuenta();
  };

  return (
    <center>
    <div className='hold-transition login-page'>
    <div className="login-box">
      <div className="login-logo">
        <Link to="#" >
          <b>Crear  </b>  Cuenta
        </Link>
      </div>
      <div className="card">
        <div className="card-body login-card-body">
          <p className="login-box-msg">Por favor,Cree su nueva cuenta</p>

          <form onSubmit={onSubmit}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                id="nombre"
                name="nombre"
                value={nombre}
                onChange={onChange}
                required
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-user" />
                </div>
              </div>
            </div>

            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                id="email"
                name="email"
                value={email}
                onChange={onChange}
                required
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope" />
                </div>
              </div>
            </div>

            <div className="input-group mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                id="contraseña"
                name="contraseña"
                value={contraseña}
                onChange={onChange}
                required
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div>
            </div>

            <div className="input-group mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Confirmar Contraseña"
                id="confirmar"
                name="confirmar"
                value={confirmar}
                onChange={onChange}
                required
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div>
            </div>

            <div className="social-auth-links text-center mb-3">
              <button
                type="submit"
                to={"#"}
                className="btn btn-block btn" style={{ backgroundColor:'rgb(51, 101, 138)'}}
              > 
                Crear Cuenta
              </button>
              <Link to={"/"} className="btn btn-block btn" style={{ backgroundColor:'rgb(134, 187, 216)'}}>
                Regresar al login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
    </center>
  );
};

export default CrearCuenta;
