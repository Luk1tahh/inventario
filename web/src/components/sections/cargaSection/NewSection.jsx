import React, { useState, useEffect } from 'react'; // 1. Agregamos useEffect
import { db } from '../../../firebaseConfig';
import { collection, addDoc, getDocs } from "firebase/firestore"; // 2. Agregamos getDocs
import CardSection from './CardSection';

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

  return(
    <div>
      <input 
        value={nom} 
        placeholder="Nueva sección..."
        onChange={(e) => setNom(e.target.value)} 
        className={`border-2 outline-none ${nom ? 'border-blue-600 border-3' : 'border-blue-400'} rounded-2xl text-black p-2 mr-2`} 
      />
      <button onClick={addSection} className='text-white bg-blue-500 hover:bg-blue-700 rounded-2xl p-3'> Agregar seccion </button>
      {/* <button onClick={ () => eliminarProd(prod.id) } className="bg-red-700 px-2 py-1 ml-4 rounded"> Eliminar </button> */}

      <ul>
        { sections.map( sec => (
          <li key={sec.id}>
            <CardSection nomSec={sec.nombre} />
          </li>
        ) ) }
      </ul>
    </div>
  )
}

export default NewSectionFB;
