import { useState, useEffect } from 'react'
import { db } from '../../firebaseConfig'
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore"

export const useProds = () => {
  const [step, setStep] = useState(0)
  const [nom, setNom] = useState('')
  const [cant, setCant] = useState('')
  const [prods, setProds] = useState([])
  const [editID, setEditID] = useState(null)

  const fetchProds = async () => {
    const querySnapshot = await getDocs(collection(db, 'productos') );
    const docs = querySnapshot.docs.map(doc => ( { id: doc.id, ...doc.data() } ) )
    setProds(docs);
  }

  useEffect( () => { fetchProds(); }, [] )

  const nextStep = () => setStep(prev => prev + 1)

//  ==================== AGREGAR PRODUCTOS ====================
//  ===========================================================
  const addProd = async () => {
    if (nom.trim() === '') return;
    try {
      const newProd = { nombre: nom, cantidad: Number(cant), fecha: new Date() }
      const docRef = await addDoc(collection(db, 'productos'), newProd)

      setProds(prev => [...prev, { ...newProd, id: docRef.id } ] )
      resetForm();
    } catch (error) { console.error('Error:', error); }
  }

//  ==================== ELIMINAR PRODUCTOS ====================
//  ============================================================
  const deleteProd = async (id) => {
    try {
      await deleteDoc(doc(db, 'productos', id) )

      setProds(prev => prev.filter(p => p.id !== id) )
    } catch (error) { console.error('Error:', error); }
  }

//  ==================== EDITAR PRODUCTOS ====================
//  ==========================================================
  const updateProd = async () => {
    if (!editID || nom.trim() === '') return;
    try {
      const prodRef = doc(db, 'productos', editID);
      const updatedData = { nombre: nom, cantidad: Number(cant) }
      await updateDoc(prodRef, updatedData);
      setProds(prev => prev.map(p => p.id === editID ? { ...p, ...updatedData } : p) )
      resetForm()
    } catch (error) { console.error('Error:', error); }
  }

  const prepareEdit = (prod) => {
    setNom(prod.nombre)
    setCant(prod.cantidad)
    setEditID(prod.id)
    setStep(0)
  }

  const resetForm = () => {
    setNom('')
    setCant('')
    setEditID(null)
    setStep(0)
  }

  return {
    step, nextStep,
    nom, setNom,
    cant, setCant,
    prods,
    addProd, deleteProd, updateProd, prepareEdit,
    isEditing: !!editID
  }
}