import React, { useState } from 'react'
import AddSectionName from './AddSectionName'
import AddItemsToSection from './AddItemsToSection'
import SectionList from './SectionList'

const InventoryManager = () => {
  const [sections, setSections] = useState([])

  const [currentStep, setCurrentStep] = useState(0)
  const [currentSectionName, setCurrentSectionName] = useState("")
  const [currentItems, setCurrentItems] = useState([])
  const [currentItemInput, setCurrentItemInput] = useState("")

  const startNewSection = () => {
    setCurrentStep(1)
    setCurrentSectionName("")
    setCurrentItems([])
  }

  const finishSection = () => {
    if (!currentSectionName) return

    const newSection = {
      name: currentSectionName,
      items: currentItems
    }

    setSections([...sections, newSection])
    setCurrentStep(0)
  }

  const addItemToCurrent = () => {
    if (currentItemInput.trim() === "") return
    setCurrentItems([...currentItems, currentItemInput])
    setCurrentItemInput("")
  }

  const addItemToSection = (index, itemName) => {
    const updated = [...sections]
    updated[index].items.push(itemName)
    setSections(updated)
  }

  const removeItemFromSection = (sectionIndex, itemIndex) => {
    const updated = [...sections]
    updated[sectionIndex].items.splice(itemIndex, 1)
    setSections(updated)
  }

  const deleteSection = (index) => {
    const updated = [...sections]
    updated.splice(index, 1)
    setSections(updated)
  }

  return (
    <div className="p-6 text-white">

      {currentStep === 0 && ( <button onClick={startNewSection} className="bg-blue-600 px-4 py-2 rounded mt-4"> Añadir sección </button> ) }

      {currentStep === 1 && (
        <AddSectionName
          currentSectionName={currentSectionName}
          setCurrentSectionName={setCurrentSectionName}
          setCurrentStep={setCurrentStep}
        />
      )}

      {currentStep === 2 && (
        <AddItemsToSection
          currentSectionName={currentSectionName}
          currentItemInput={currentItemInput}
          setCurrentItemInput={setCurrentItemInput}
          addItemToCurrent={addItemToCurrent}
          currentItems={currentItems}
          finishSection={finishSection}
        />
      )}

      <SectionList
        sections={sections}
        addItemToSection={addItemToSection}
        removeItemFromSection={removeItemFromSection}
        deleteSection={deleteSection}
      />
    </div>
  )
}

export default InventoryManager
