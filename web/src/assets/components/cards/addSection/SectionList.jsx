import SectionCard from './SectionCard'

const SectionList = ({
  sections,
  addItemToSection,
  removeItemFromSection,
  deleteSection
} ) => {

  return (
    <div className="mt-8">
      {/* <h2 className="text-2xl mb-4">Secciones creadas</h2> */}

      {sections.map( (sec, index) => (
        <SectionCard 
          key={index}
          index={index}
          sec={sec}
          addItemToSection={addItemToSection}
          removeItemFromSection={removeItemFromSection}
          deleteSection={deleteSection}
        />
      ) ) }
    </div>
  )
}

export default SectionList
