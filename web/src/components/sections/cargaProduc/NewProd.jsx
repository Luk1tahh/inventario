import React, { useEffect, useState } from 'react'
import { collection, addDoc, getDocs } from 'firebase/firestore'
import { db } from '../../../firebaseConfig'
import CardProd from './CardProd'

const NewProd = () => {
  const [step, setStep] = useState(0)
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

  const nextStep = () => {
    setStep( prev => prev + 1)
  }

  const addProd = async () => {
    if ( nom.trim() === '' ) return
    try {
      const newProd = { nombre: nom, cantidad: cant, fecha: new Date() }
      const docRef = await addDoc( collection(db,'productos'), newProd )

      setProds( prev => [...prev, { ...newProd, id: docRef.id } ] )
      setNom('')
      setCant('')
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
    <div>
      {step === 0 &&(
        <div> 
          <input 
            value={nom} 
            placeholder='Nuevo producto...' 
            onChange={ (e) => setNom(e.target.value) }
            className={`border-2 outline-none ${nom ? 'border-blue-600 border-3' : 'border-blue-400'} rounded-2xl text-black p-2 mr-2`}
          />
        <button onClick={nextStep} className='text-white bg-blue-500 hover:bg-blue-700 rounded-2xl p-3'> Agregar cantidad </button>
        </div>
      ) }
      
      {step === 1 &&(
        <div> 
          <input
            type='number'
            value={cant} 
            placeholder='Cantidad...' 
            onChange={ (e) => setCant(e.target.value) }
            className={`border-2 outline-none ${nom ? 'border-blue-600 border-3' : 'border-blue-400'} rounded-2xl text-black p-2 mr-2`}
          />
        <button onClick={addProd} className='text-white bg-blue-500 hover:bg-blue-700 rounded-2xl p-3'> Agregar Producto </button>
        </div>
      ) }

      <ul>
        { prods.map( prod => (
          <li key={prod.id}>
            <CardProd 
              nomProd={prod.nombre}
              cant={prod.cantidad}
            />
          </li>
        ) ) }
      </ul>
    </div>
  )
}

export default NewProd