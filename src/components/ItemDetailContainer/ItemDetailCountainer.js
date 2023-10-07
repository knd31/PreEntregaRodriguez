import { useEffect,useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { collection, doc, getDoc } from "firebase/firestore"
import {db} from "../../firebase/firebase";

const ItemDetailContainer = () =>{
    const[product, setProduct] = useState(null)
    const {itemId} = useParams()

    // useEffect(() =>{
    //     getProductById(itemId)
    //     .then(response =>{
    //         setProduct(response)
    //     })
    //     .catch(error=>{
    //         console.error(error)
    //     })
    // }, [itemId])
    useEffect(() =>{
        const collectionProd = collection(db, 'productos')
        const referenciaAlDoc = doc(collectionProd, itemId)
        getDoc(referenciaAlDoc)
        .then((res) => setProduct({itemId:res.id, ...res.data()}))
        .catch((error) => console.log(error))
    }, [itemId])

    return(
        <div>
            <ItemDetail {...product}/>
        </div>
    )
}
export default ItemDetailContainer
