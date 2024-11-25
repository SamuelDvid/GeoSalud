import "./Login.css";

const Login = () => {
  return (
    <html lang="es">
      <body>
        <h1 className="titulo">Bienvenidos a GeoSalud</h1>
        <h2 className="subtitulo">Te atendemos DE UNA!</h2>

        <h2>
          Usuario
          <input type="text" />
        </h2>

        <h2>
          Clave
          <input type="password" />
        </h2>

        <h2 className="ingresar">
          <a href="./cuenta">Ingresar</a>
        </h2>
      </body>
    </html>
  );
};

export default Login;

//pendiente añadir diseño a la pagina de cuenta
