import React, {useState, useEffect} from 'react'
import Item from '../Item/Item';
import './itemList.css'

//FIREBASE
import {getFirestore, collection, query, where, getDocs} from 'firebase/firestore';
import { useParams } from 'react-router-dom';

const ItemList = () => {
  const [productos, setProductos] = useState([]);
  const {categoriaId} = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection (querydb, 'products');
    if(categoriaId) {
      const queryFilter = query(queryCollection, where('categoria', '==', categoriaId))
      getDocs(queryFilter)
      .then(res => setProductos(res.docs.map(product => ( { id: product.id, ...product.data() } )))) 
    } else {
      getDocs(queryCollection)
        .then(res => setProductos(res.docs.map(product => ({ id: product.id, ...product.data() }))))
    }
  }, [categoriaId])


  return (
    <>
      <div className='contenedor-cards'>
        {productos.map((prod) => {
          return (
            <div key={prod.id}>
              <Item product={prod} />
            </div>
          )
        })}
      </div>
    </>
    

  )
}

export default ItemList;








//Lo comento porque me da miedo borrarlo
//En este archivo hago la llamada a JSONbin y le paso los datos obtenidos a Item.js
// const ItemList = () => {
//     const[productos, setProductos] = useState([]);
    
//     useEffect(()=>{
//         axios('https://api.jsonbin.io/v3/b/631ca4dc5c146d63ca966290')
//         .then(res=>setProductos(res.data.record))
//     }, [])
     
//     return (
//     <div className='contenedor-cards'>
//         {productos.map((product) => (
//             <Item key={product.id} product={product} />
//       ))}
//     </div>
//   )
// }
// export default ItemList
