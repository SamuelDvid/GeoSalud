import Navbar from "@/componentes/Navbar"

export default function RootLayout({ children }) {
  return (
    <html lang="es">
       
      <body>
      <Navbar />
      <h1 className="titulo">Bienvenidos a GeoSalud</h1>
      
      {children}
      
      </body>

    </html>
  )
}
