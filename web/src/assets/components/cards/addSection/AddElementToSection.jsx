import { useState } from 'react'

const AddElementToSection = ({ onAdd }) => {
  const [input, setInput] = useState("")

  return (
    <div className="mt-3">
      <input 
        className="text-black p-1 rounded"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button 
        className="bg-blue-700 ml-2 px-3 py-1 rounded"
        onClick={() => {
          if (input.trim() === "") return
          onAdd(input)
          setInput("")
        } }
      >
        +
      </button>
    </div>
  )
}

export default AddElementToSection
