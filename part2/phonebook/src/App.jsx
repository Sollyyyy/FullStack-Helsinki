import { useState } from 'react'
const Filter = (props) =>{
  const {search, event} = props  

return(
      <div>
        <form>
          <p>filter shown with </p> 
          <input value={search} onChange={event}/>
        </form>
      </div>
      )
}
const PersonForm = (props) => {

  return(
      <form onSubmit={props.form}>
        <div>
          name: <input value={props.nValue} onChange={props.nChange}/>
        </div>
        <div>
          number: <input value={props.numValue} onChange={props.numChange} />
        </div>

        <div>
          <button type="submit">
            add</button>
        </div>
      </form>
  )
}
const Persons = (props) => {
  
  return(
    props.personsToShow.map( person => 
        <p key={person.name}><b>{person.name} {person.number}</b></p>

      ))
}
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  const names = persons.map(person=>person.name)
  const handleNameChange = (event) =>{
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) =>{
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  const handleSearchChange = (event) =>{
    console.log(event.target.value)
    setSearch(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    console.log(newName)
    console.log(newNumber)
    const person = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    if (!names.includes(person.name)) {
    setPersons(persons.concat(person))
    }
    else{
      alert(`${person.name} is already added to the phonebook`)
    }
  }
  const personsToShow = persons.filter(person => person.name.includes(search))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={search} event={handleSearchChange}/>
      <h2>add a new</h2>
      <PersonForm form={addPerson} nValue={newName} nChange={handleNameChange} numValue={newNumber} numChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow}/>
      
    </div>
  )
}

export default App