import React, { useState, useEffect } from 'react';
import { useSections } from '../../hooks/useSections';
import CardSection from './CardSection';
import AddSec from './AddSec';

const NewSection = () => {
  const { 
    nom, setNom, sections, addSection, 
    deleteSection, updateSection, prepareEdit, isEditing 
  } = useSections();

  return(
    <div>
      <AddSec 
        nom={nom} 
        setNom={setNom} 
        addSec={isEditing ? updateSection : addSection} 
        isEditing={isEditing} 
      />

      <ul>
        {sections.map(sec => (
          <li key={sec.id}>
            <CardSection 
              nomSec={sec.nombre} 
              elim={ () => deleteSection(sec.id) } 
              edit={ () => prepareEdit(sec) } 
            />
          </li>
        ) ) }
      </ul>
    </div>
  )
}

export default NewSection;
