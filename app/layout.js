//esta es la pagina principal o home, desde aca se cargan todos los componentes creados con los que vamos a trabajar


import Navbar from "@/componentes/Navbar"

export default function RootLayout({children}) {
  return (
    <html lang="es">
       <head>
        <title>GeoSalud</title>
       </head>
      <body>
      
      {/*  Se importa el componente Navbar que es la barra de navegacion, este permanecera fijo en toda nuestra pagina */}
      <Navbar />
      <h1 className="titulo">Bienvenidos a GeoSalud</h1>
      {children}
      </body>

    </html>
  )
}
