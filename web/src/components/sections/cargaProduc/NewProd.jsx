import React, { useEffect, useState } from 'react'
import { collection, addDoc, getDocs } from 'firebase/firestore'
import { db } from '../../../firebaseConfig'

const NewProd = () => {
  const [nom, setNom] = useState('')
  const [cant, setCant] = useState('')
  const [prods, setProds] = useState([])

  const fetchProds = async () => {
    const querySnapshot = await getDocs( collection(db, 'productos') )
    const docs = querySnapshot.docs.map( doc => ( {
      id: doc.id, 
      ...doc.data()
    } ) )
    setProds(docs)
  }

  useEffect( () => { 
    fetchProds() 
  }, [] )

  const addProd = async () => {
    if ( nom.trim() === '' ) return
    try {
      const newProd = { nombre: nom, fecha: new Date() }
      const docRef = await addDoc( collection(db,'productos'), newProd )

      setProds( prev => [...prev, { ...newProd, id: docRef.id } ] )
      setNom('')
    } catch(error) {
      console.error('Error:', error)
    }
  }

  const deleteProd = async (id) => {
    try {
      await deleteDoc( doc(db, 'productos', id ) );

      setProds( prev => prev.filter( p => p.id !== id ) );
        
      alert('Producto eliminado');
    } catch (error) {
      console.error('Error al eliminar:', error);
    }
  }

  return (
    <div className='p-4 text-white'>
      <input 
        value={nom} 
        placeholder='Nuevo producto...' 
        onChange={ (e) => setNom(e.target.value) }
        className='text-black p-2'
      />

      <button onClick={addProd} className='bg-green-600 p-2 ml-2'> Agregar </button>

      <ul className='mt-4'>
        { prods.map( prod => (
          <li key={prod.id} className='text-black border-b border-gray-600 py-1'>
            {prod.nombre}
          </li>
        ) ) }
      </ul>
    </div>
  )
}

export default NewProd