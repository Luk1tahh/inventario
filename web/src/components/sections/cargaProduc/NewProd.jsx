import React from 'react';
import { useProds } from '../../hooks/useProds'; 
import { useSections } from '../../hooks/useSections';
import AddNom from './AddNom';
import AddCant from './AddCant';
import CardProd from './CardProd';
import Modal from './Modal';

const NewProd = () => {
  const {
    step, nextStep, nom, setNom, cant, setCant,
    prods, addProd, deleteProd, updateProd, prepareEdit, isEditing, asigSec
  } = useProds()

  const {
    sections
  } = useSections()

  return (
    <div>
      {step === 0 && (
        <AddNom
          nom={nom}
          setNom={setNom}
          onNext={nextStep}
          isEditing={isEditing}
        />
      ) }

      {step === 1 && (
        <AddCant 
          cant={cant}
          setCant={setCant}
          addProd={isEditing ? updateProd : addProd}
          isEditing={isEditing}
        />
      ) }

      <ul>
        {prods.map(prod => (
          <li key={prod.id}>
            <CardProd 
              nomProd={prod.nombre}
              cant={prod.cantidad}
              elim={ () => deleteProd(prod.id) }
              edit={ () => prepareEdit(prod) }
              agregarSec= { <Modal 
                producto={prod}
                seccion={sections}
                addASec={asigSec}
              /> }
            />
          </li>
        ) ) }
      </ul>
    </div>
  )
}

export default NewProd