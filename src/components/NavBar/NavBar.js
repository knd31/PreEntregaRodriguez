import "./navbar.css"
import { Link, NavLink } from "react-router-dom"
import Card from "../CartWidget/index"
const Navbar = () => {
  return (
     <nav>
       <Link to='/'>
         <h1>Bienvenidos</h1>
       </Link>
       <div className="categorias"> 
        <NavLink to={`/category/celular`}> Celulares </NavLink>
        <NavLink to={`/category/tablet`} > Tablet </NavLink>
        <NavLink to={`/category/computadoras`}> Computadoras </NavLink>
       </div>
       <Card/>
     </nav>
  )
}

export default Navbar