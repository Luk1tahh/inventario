const AddSectionName = ({ currentSectionName, setCurrentSectionName, setCurrentStep }) => {
  return (
    <div className="mt-4">

      <h2 className="text-xl mb-2">Nombre de la sección:</h2>

      <input 
        className="border-2 border-white p-2 rounded w-64"
        value={currentSectionName}
        onChange={(e) => setCurrentSectionName(e.target.value)}
      />

      <button 
        className="bg-blue-600 px-4 py-2 rounded ml-3"
        onClick={() => setCurrentStep(2)}
        disabled={!currentSectionName.trim()}
      >
        Siguiente
      </button>
      
    </div>
  )
}

export default AddSectionName
