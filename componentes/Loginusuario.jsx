//se crea un componente para cada sesion del menu ingresar, ubicado en la barra de navegacion.

import "./Loginusuario.css";

const LoginUser = () => {
  return (
    <div className="contenedor">
      <section className="contenedor-login">
        <div className="usuario">
          <span className="usuario-input">Usuario</span>
          <input type="text" className="input" />
        </div>

        <div className="password">
          <span className="password-input">Contraseña</span>
          <input type="password" className="input" />
        </div>

        <h2 className="ingresar">
          <a href="./cuenta" className="navegacion-ingreso">
            Ingresar
          </a>
        </h2>
      </section>
    </div>
  );
};

export default LoginUser;
