import { Link } from "react-router-dom"
import "./Item.css"
const Item = ({ id, name, img, price, stock }) => {
    return (
        <div className="CardItem">
            <div className="contenedor">
                <header className="Header">
                    <h2 className="ItemHeader">
                        {name}
                    </h2>
                </header>
                <picture>
                    <img src={img} alt={name} className="ItemImg" />
                </picture>
                <section>
                    <p className="Info">
                        precio: ${price}
                    </p>
                    <p className="Info">
                        stock disponible: {stock}
                    </p>
                </section>
                <footer className="ItemFooter">
                    <Link to={`/item/${id}`} className="Detalle"> Ver detalle</Link>
                </footer>
            </div>
        </div>
    )
}

export default Item