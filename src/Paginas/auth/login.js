import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import APIInvoke from "../../Utils/APIInvoke";
import swal from "sweetalert";

const Login = () => {
  //Este método es para redireccionar un componente a otro
  const navigate = useNavigate();

  //Definir el estado inicial de las variables
  const [usuario, setUsuario] = useState({
    email: "",
    contraseña: "",
  });

  const { email, contraseña } = usuario;

  const onChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    document.getElementById("email").focus();
  }, []);

  const iniciarSesion = async () => {
    const verificarExistenciaUsuario = async (email, contraseña) => {
      try {
        const response = await APIInvoke.invokeGET(
          `/User?email=${email}&contraseña=${contraseña}`
        );
        if (response && response.length > 0) {
          return response[0]; // Devuelve el primer usuario que coincide
        }
        return null; // El usuario no existe
      } catch (error) {
        console.error(error);
        return null; // Maneja el error si la solicitud falla
      }
    };

    if (contraseña.length < 6) {
      const msg = "La contraseña debe ser mínimo de 6 caracteres.";
      swal({
        title: "Error",
        text: msg,
        icon: "error",
        buttons: {
          confirm: {
            text: "Ok",
            value: true,
            visible: true,
            className: "btn btn-danger",
            closeModal: true,
          },
        },
      });
    } else {
      const usuarioExistente = await verificarExistenciaUsuario(
        email,
        contraseña
      );
      const response = await APIInvoke.invokeGET(`/User?email=${email}&contraseña=${contraseña}`);

      if (!usuarioExistente) {
        const msg = "Contraseña incorrecta, Verifique los datos ingresados.";
        new swal({
          title: "Error",
          text: msg,
          icon: "error",
          buttons: {
            confirm: {
              text: "Ok",
              value: true,
              visible: true,
              className: "btn btn-danger",
              closeModal: true,
            },
          },
        });
      } else {
        if (usuarioExistente.rol === 1){
          //Contenemos el token de acceso
        const jwt = response.token;

        //Guardar el token en el localstorage
        localStorage.setItem('token', jwt);

          navigate("/pagina-principal");
        }else {
          navigate("/pagina-admin");
        }
      }
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    iniciarSesion();
  };

  return (
    <center>
      <div className="login-box vh-100 d-flex align-items-center justify-content-center">
      <div className="login-box">
        <div className="login-logo">
        <Link to="#">
          <b>Inicia  </b>  Sesión
        </Link>
        </div>
        <div className="card">
          <div className="card-body login-card-body" style={{  border: 'rgb(94, 80, 63)', }}>
            <p className="login-box-msg " >
              Bienvenido, Ingrese su información 
            </p>
            <form onSubmit={onSubmit}>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  id="email"
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
                  name="contraseña"
                  id="contraseña"
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
              <div className="social-auth-links text-center mb-3">
                <button type="submit" className="btn btn-block btn-light" style={{ backgroundColor:'rgb(134, 187, 216)'}}>
                  Ingresar
                </button>
                <Link to={"/crear-cuenta"} className="btn btn-block btn" 	style={{ backgroundColor:'rgb(51, 101, 138)'}}>
                  Crear Cuenta
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

export default Login;
