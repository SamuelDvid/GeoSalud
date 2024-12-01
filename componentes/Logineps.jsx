//se crea un componente para cada sesion del menu ingresar, ubicado en la barra de navegacion.
import "./Logineps.css";

const LoginEps = () => {
  return (
    <div className="contenedor">
      <section className="contenedor-login">
        <div className="eps">
          <form>
            <b className="eps">EPS</b>
            <select className="input">
              <option value=""></option>
              <option value="sanitas">Mutual Ser</option>
              <option value="salud-total">Sanitas</option>
              <option value="mutual-ser">Salud Total</option>
            </select>
          </form>
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

export default LoginEps;
