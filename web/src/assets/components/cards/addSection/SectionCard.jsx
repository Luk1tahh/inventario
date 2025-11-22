import AddElementToSection from './AddElementToSection'

const SectionCard = ({
  sec,
  index,
  addItemToSection,
  removeItemFromSection,
  deleteSection
} ) => {

  return (
    <div className="border p-4 rounded mb-4">
      
      <div className="flex justify-between">
        <h3 className="text-xl font-bold"> {sec.name} </h3>

        <button className="bg-red-600 px-3 py-1 rounded" onClick={ () => deleteSection(index) } > Eliminar sección </button>
      </div>

      <ul className="ml-6 mt-2 list-disc">
        {sec.items.map( (item, i) => (
          <li key={i} className="flex items-center gap-3">
            {item}

            <button className="bg-red-600 px-2 py-1 rounded text-sm" onClick={ () => removeItemFromSection(index, i) } > Borrar </button>
          </li>
        ) ) }
      </ul>

      <AddElementToSection onAdd={ (itemName) => addItemToSection(index, itemName) } />
    </div>
  )
}

export default SectionCard
