import "./Login.css";

const Login = () => {
  return (
    <div>
      <body>
        <h1 className="titulo">Bienvenidos a GeoSalud</h1>
        <h2 className="subtitulo">Te atendemos DE UNA!</h2>

        <section className="contenedor-login">
          <div className="usuario">
            <span className="usuario-input">Nombre</span>
            <input type="text" />
          </div>

          <div className="password">
            <span className="password-input">Contraseña</span>
            <input type="password" />
          </div>
        </section>

        <h2 className="ingresar">
          <a href="./cuenta" className="navegacion-ingreso">
            Ingresar
          </a>
        </h2>
      </body>
    </div>
  );
};

export default Login;

//pendiente añadir diseño a la pagina de cuenta
