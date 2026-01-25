import React, { useEffect, useState } from 'react'
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { db } from '../../../firebaseConfig'
import AddNom from './AddNom'
import AddCant from './AddCant'
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
      const newProd = { nombre: nom, cantidad: Number(cant), fecha: new Date() }
      const docRef = await addDoc( collection(db,'productos'), newProd )

      setProds( prev => [...prev, { ...newProd, id: docRef.id } ] )
      setNom('')
      setCant('')
      setStep(0)
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
          <AddNom
            nom={nom}
            setNom={setNom}
            onNext={nextStep}
          />
        </div>
      ) }

      {step === 1 &&(
        <div> 
          <AddCant 
            cant={cant}
            setCant={setCant}
            addProd={addProd}
          />
        </div>
      ) }

      <ul>
        { prods.map( prod => (
          <li key={prod.id}>
            <CardProd 
              nomProd={prod.nombre}
              cant={prod.cantidad}
              elim={ () => deleteProd(prod.id) }
            />
          </li>
        ) ) }
      </ul>
    </div>
  )
}

export default NewProd