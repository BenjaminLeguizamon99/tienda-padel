import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ItemDetailContainer = () => {
    const [detalles, setDetalles] = useState([]);
    const {id} = useParams();

    const getData= async () =>{
        const response = await fetch("https://api.jsonbin.io/v3/b/631ca4dc5c146d63ca966290");
        const data = await response.json();
        return data.record
    }
    
    useEffect(()=>{
        getData().then(details=> setDetalles(details.find((detalles => detalles.id === id))))
    }, [])
  
    return (
    <div>
        <ItemDetail info={detalles} />
    </div>
  )
}

export default ItemDetailContainer