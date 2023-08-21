import Card from "../CartWidget/index"
const Navbar = () => {
  return (
    <nav>
      <h1>Bienvenidos</h1>
      <div>
      <button>Inicio</button>
      <button>Productos</button>
      <button>Contacto</button>
      </div>
      <Card/>
    </nav>
  )
}
export default Navbar