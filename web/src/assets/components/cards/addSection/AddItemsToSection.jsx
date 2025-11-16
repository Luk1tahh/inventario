const AddItemsToSection = ({
  currentSectionName,
  currentItemInput,
  setCurrentItemInput,
  addItemToCurrent,
  currentItems,
  finishSection
} ) => {

  return (
    <div className="mt-4">
      
      <h2 className="text-xl mb-2">Agregar elementos a "{currentSectionName}"</h2>

      <div className="flex gap-2">
        <input 
          className="border-2 border-white p-2 rounded w-64"
          value={currentItemInput}
          onChange={(e) => setCurrentItemInput(e.target.value)}
        />

        <button className="bg-blue-600 px-4 py-2 rounded" onClick={addItemToCurrent}> Añadir </button>
      </div>

      <ul className="mt-3 list-disc ml-6">
        {currentItems.map((item, i) => (
          <li key={i}>{item}</li>
        ) ) }
      </ul>

      <button 
        className="bg-green-700 px-4 py-2 rounded mt-4 block"
        onClick={finishSection}
        disabled={currentItems.length === 0}
      >
        Finalizar sección
      </button>

    </div>
  )
}

export default AddItemsToSection
