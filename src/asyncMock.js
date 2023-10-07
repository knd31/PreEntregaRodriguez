 export const products =[
    // {
    //     id:'1',
    //     name:'Iphone 12',
    //     price: 2259999,
    //     category: 'celular',
    //     img:'../img/producto/iphone.jpg',
    //     stock: 10,
    //     description:'Almacenamiento de 256 GB'
    // },

    {
       // id:'2',
        name:'S23 Ultra',
        price: 779999,
        category: 'celular',
        img:'../img/producto/s23.jpg',
        stock: 15,
        description:'Memoria RAM 8/12 GB, Memoria interna 256/512 GB'
    },
    {
       // id:'3',
        name:'Z Fold 5',
        price: 1129999,
        category: 'celular',
        img:'../img/producto/zfold.jpg',
        stock: 5,
        description:'Cuenta con un almacenamiento interno de 256GB y 12GB de RAM '
    },
    {
        //id:'4',
        name:'S6 lite',
        price: 350000,
        category: 'tablet',
        img:'../img/producto/s6.jpg',
        stock: 20,
        description:'Cuenta con un almacenamiento interno de 128GB, Buena duracion de bateria '
    },
    {
       // id:'5',
        name:'S9 plus',
        price: 899999,
        category: 'tablet',
        img:'../img/producto/s9.jpg',
        stock: 15,
        description:'Cuenta con un almacenamiento interno de 256GB, Camara trasera de 50MP '
    },
    {
        //id:'6',
        name:'Book3',
        price: 700000,
        category:'computadoras',
        img:'../img/producto/book3.jpg',
        stock: 5,
        description:'Windows 11 Home, Memoria de 16 GB '
    }
  
]
export const getProducts = () =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        }, 500)
    })
}
export const getProductById = (productId) =>{
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500);
    })
}

export const getProductByCategory = (productCategory) =>{
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(products.filter(prod => prod.category=== productCategory))
        }, 500);
    })
}