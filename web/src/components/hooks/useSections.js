import { useState, useEffect } from 'react'
import { db } from '../../firebaseConfig'
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore"

export const useSections = () => {
  const [nom, setNom] = useState('')
  const [sections, setSections] = useState([])
  const [editID, setEditID] = useState(null) // Estado para saber qué estamos editando
  const [secID, setSecID] = useState() // Guarda el id de la seccion

  const fetchSections = async () => {
    const querySnapshot = await getDocs(collection(db, 'secciones') )
    const docs = querySnapshot.docs.map(doc => ( { id: doc.id, ...doc.data() } ) )
    setSections(docs)
  };

  useEffect(() => { fetchSections(); }, []);

//  ==================== AGREGAR SECTION ====================
//  =========================================================  
  const addSection = async () => {
    if (nom.trim() === '') return
    try {
      const newSection = { nombre: nom, fecha: new Date()}
      const docRef = await addDoc(collection(db, 'secciones'), newSection)

      setSections(prev => [...prev, { ...newSection, id: docRef.id } ] )
      setNom('')
    } catch (error) { console.error('Error:', error) }
  };


//  ==================== ELIMINAR SECTION ====================
//  ==========================================================
  const deleteSection = async (id) => {
    try {
      await deleteDoc(doc(db, 'secciones', id))

      setSections(prev => prev.filter(p => p.id !== id) )

    } catch (error) { console.error('Error al eliminar:', error) }
  };

//  ==================== EDITAR SECTION ====================
//  ========================================================
  const updateSection = async () => {
    if (!editID || nom.trim() === '') return
    try {
      const secRef = doc(db, 'secciones', editID)
      await updateDoc(secRef, { nombre: nom } )
      
      setSections(prev => prev.map(s => s.id === editID ? { ...s, nombre: nom } : s) )
      setNom('')
      setEditID(null)
    } catch (error) { console.error('Error al editar:', error) }
  };

  const prepareEdit = (sec) => {
    setNom(sec.nombre)
    setEditID(sec.id)
  };

  return {
    nom, setNom,
    sections,
    addSection,
    deleteSection,
    updateSection,
    prepareEdit,
    isEditing: !!editID // Booleano para saber si muestra "Guardar" o "Agregar"
  };
};