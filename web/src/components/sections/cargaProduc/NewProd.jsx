import React from 'react';
import { useProds } from '../../hooks/useProds'; 
import AddNom from './AddNom';
import AddCant from './AddCant';
import CardProd from './CardProd';

const NewProd = () => {
  const {
    step, nextStep, nom, setNom, cant, setCant,
    prods, addProd, deleteProd, updateProd, prepareEdit, isEditing
  } = useProds()

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
            />
          </li>
        ) ) }
      </ul>
    </div>
  )
}

export default NewProd