import { useState, useEffect } from "react"
import ItemList from '../ItemList/ItemList'
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where} from "firebase/firestore"
import {db} from "../../Servicios/config"


const Item = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const { categoryId } = useParams()

    useEffect(() =>{
        const coleccionProductos = categoryId ? query(collection(db, "productos"), where("category", "==", categoryId)) :collection(db, "productos")
        getDocs(coleccionProductos)
        .then((res) => {
            const list = res.docs.map((product) =>{
                return{
                    id: product.id,
                    ...product.data()
                }
     })
            setProducts(list)
        })
        .catch ((error) =>console.log(error))
    }, [categoryId])
    
    return (
        <div>
            <h1>{greeting}</h1>
            {<ItemList products={products} />}
        </div>
    )
}
export default Item