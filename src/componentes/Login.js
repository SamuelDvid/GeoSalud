import './Login.css'
import Button from "@/componentes/Button";

const Login = () => {
  return (
    <div>
        <header>
            <h1 className='titulo'>Bienvenido a GeoSalud, te atendemos DE UNA!</h1>
        </header>

        <main className='contenedor-principal'>
            <div className='subtitulo'>
                <h2 className='subtitulo'>Ingresa YA!</h2>
            </div>
        </main>

        <section className='contenedor-input'>

            <div className='input-usuario'>
                <h3 className='input-titulo'>Usuario</h3>
                <input type='text'className='input-usuario'/>
            </div>
            <div className='input-contraseña'>
                <h3 className='input-titulo'>Contraseña</h3>
                <input type='password'className='input-contraseña'/>
            </div>

            <Button>
                Ingresar
            </Button>

        </section>

       
    </div>
   
  )
}

export default Login;
