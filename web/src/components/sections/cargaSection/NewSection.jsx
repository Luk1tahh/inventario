import React, { useState, useEffect } from 'react';
import { db } from '../../../firebaseConfig';
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import CardSection from './CardSection';
import AddSec from './AddSec';

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

  // Este efecto corre una sola vez cuando el componente se monta
  useEffect( () => {
    fetchSections();
  }, [] );

  const addSection = async () => {
    if (nom.trim() === "") return;
    try {
      const newSection = { nombre: nom, fecha: new Date() };
      const docRef = await addDoc(collection(db, "secciones"), newSection);

    // Actualiza la lista local agregando el nuevo
      setSections(prev => [...prev, { ...newSection, id: docRef.id } ] );
      setNom('');
    } catch (error) {
      console.error("Error:", error);
      }
  }

  const deleteSection = async (id) => {
    try {
      await deleteDoc( doc( db, 'secciones', id ) );
    
      setSections( prev => prev.filter( p => p.id !== id ) );

      alert('Seccion eliminada');
    } catch (error) {
      console.error('Error al eliminar:', error);
    } }

  return(
    <div>
      <AddSec 
        nom={nom}
        setNom={setNom}
        addSec={addSection}
      />

      {/* <button onClick={ () => eliminarProd(prod.id) } className="bg-red-700 px-2 py-1 ml-4 rounded"> Eliminar </button> */}

      <ul>
        { sections.map( sec => (
          <li key={sec.id}>
            <CardSection nomSec={sec.nombre} elim={ () => deleteSection(sec.id) }/>
          </li>
        ) ) }
      </ul>
    </div>
  )
}

export default NewSectionFB;
