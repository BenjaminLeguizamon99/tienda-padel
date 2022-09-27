import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'


//FIREBASE
import {getFirestore, query, doc, getDoc} from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [detalles, setDetalles] = useState([]);
    const {detalleId} = useParams();

    useEffect(()=>{
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'products', detalleId);
        getDoc(queryDoc)
            .then(res => setDetalles({id: res.id, ...res.data()}))
    }, [detalleId])

    return (
    <div>
        <ItemDetail info={detalles} />
    </div>
  )
}

export default ItemDetailContainer