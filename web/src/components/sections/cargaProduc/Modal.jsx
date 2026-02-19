import React from 'react'

const Modal = ( {prod, sections, AddASec} ) => {
  return (
    <select 
      onChange={ (e) => AddASec(prod.id, e.target.value) }
      defaultValue={prod.secID || ""}
      className="ml-2 border rounded text-sm"
    >
    
    <option value="" disabled> Asignar a... </option>
      {sections.map(sec => ( <option key={sec.id} value={sec.id}> {sec.nombre} </option> ) ) }
    </select>
  )
}

export default Modal
