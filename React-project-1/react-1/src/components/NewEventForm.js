import { useState, 
  //R useRef
 } from 'react'
import './NewEventForm.css'

export const NewEventForm = ({ addEvent }) => {

  // const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [Title, setTitle] = useState('')
  const [Location, setLocation] = useState('Manchester')
  //R const title = useRef()
  //R const date = useRef()

  const resetForm = () => {
    setTitle('')
    setDate('')
    setLocation('Manchester')
    //R title.current.value = ''
    //R date.current.value = ''
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(Title, date)

    const event = {
      //R title: title.current.value,
      //R date: date.current.value,
      title: Title,
      date: date,
      Location: Location,
      id: Math.floor(Math.random() * 10000)
    }

    console.log(event)

    // console.log(event)
    addEvent(event)
    resetForm()
  }

  // const handleChange = (e) => {
  //   setTitle(e.target.value)
  // }
  // console.log(e.target.value)


  return (
    <form className='new-event-form' onSubmit={handleSubmit}>
      {/* <label htmlFor="title">Event Title:</label>
      <input type="text" id='title' /> */}

      <label>
        <span>Event Title:</span>
        <input 
          type="text" 
          //R ref={title}
          onChange={(e) => setTitle(e.target.value)} 
          value={Title} 
          />
      </label>
      <label>
        <span>Event Date:</span>
        <input
          type="date" 
          //R ref={date}
          onChange={(e) => setDate(e.target.value)} 
          value={date} 
          />
      </label>
      <label>
        <span>Event Location</span>
        <select onChange={(e) => setLocation(e.target.value)}>
          <option value="Manchester">Manchester</option>
          <option value="London">London</option>
          <option value="Cardiff">Cardiff</option>
        </select>
      </label>
      <button>Submit</button>
      {/* <p>title - {Title}, date - {date} </p>
      <p onClick={resetForm}>reset the form</p> */}
    </form>
  )
}
