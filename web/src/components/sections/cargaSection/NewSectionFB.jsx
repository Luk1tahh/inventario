import React, { useState, useEffect } from 'react'; // 1. Agregamos useEffect
import { db } from '../../../firebaseConfig';
import { collection, addDoc, getDocs } from "firebase/firestore"; // 2. Agregamos getDocs

const NewSectionFB = () => {
  const [nom, setNom] = useState('');
  const [sections, setSections] = useState([]);

  // --- FUNCIÓN PARA TRAER DATOS (LEER) ---
  const fetchSections = async () => {
    const querySnapshot = await getDocs( collection(db, "secciones") );
    const docs = querySnapshot.docs.map( doc => ( {
      id: doc.id,
      ...doc.data()
    } ) );
    setSections(docs);
  };

  // 3. Este efecto corre una sola vez cuando el componente se monta
  useEffect( () => {
    fetchSections();
  }, [] );

  const addSection = async () => {
    if (nom.trim() === "") return;
    try {
      const newSection = { nombre: nom, fecha: new Date() };
      const docRef = await addDoc(collection(db, "secciones"), newSection);

    // Actualizamos la lista local agregando el nuevo
      setSections(prev => [...prev, { ...newSection, id: docRef.id } ] );
      setNom('');
    } catch (error) {
      console.error("Error:", error);
      }
  }

  const deleteSection = async (id) => {
    try {
      await deleteDoc( doc( db, 'section', id ) );
    
      setProds( prev => prev.filter( p => p.id !== id ) );
            
      alert('Producto eliminado');
    } catch (error) {
      console.error('Error al eliminar:', error);
    } }
  }

  return (
    <div className='p-4 text-white'>
      <input 
        className='text-black p-2' 
        value={nom} 
        onChange={(e) => setNom(e.target.value)} 
        placeholder="Nueva sección..."
      />
      <button onClick={addSection} className='bg-green-600 p-2 ml-2'>Agregar</button>

      <ul className='mt-4'>
        {sections.map(sec => (
          <li key={sec.id} className='text-black border-b border-gray-600 py-1'>
            {sec.nombre}
          </li>
        ) ) }
      </ul>
    </div>
  );

export default NewSectionFB;