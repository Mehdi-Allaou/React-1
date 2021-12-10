// import events from '../App.js'



// export default function Events() {

//   events.map((event, index) => (
//     <React.Fragment key={event.id}>
//       <h2>{index} - {event.title}</h2>
//       <button onClick={() => handleClick(event.id) }>delete event</button>
//     </React.Fragment>
//   ))

// }


import React from "react"
import styles from './EventList.module.css'

export default function EventList({ events, handleClick }) {
  return (
    <div>
      {events.map((event, index) => (
        <div className={styles.card} key={event.id}>
          <h2>{index} - {event.title}</h2>
          <p>{event.Location} - {event.date}</p>
          <button onClick={() => handleClick(event.id) }>delete event</button>
        </div>
      ))}
    </div>
  )
}
