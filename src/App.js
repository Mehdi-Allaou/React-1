import './App.css';
import { useState } from 'react'
import Title from './components/Title';
import Modal from './components/Modal';
import EventList from './components/EventList';
import { NewEventForm } from './components/NewEventForm';

function App() {

  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([])


  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event]
    })
    setShowModal(false)
  }

  // console.log(showEvents)
  // console.log(showModal)

  const handleClick = (id) => {
      setEvents((prevEvents) => {
        return prevEvents.filter((event) => {
          return id !== event.id
        })
      })
      console.log(id)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  const subtitle = "All the latest events in Luigiland"

  return (
    <div className="App">
      <Title title="Events in your area" subtitle={subtitle} />
      {/* <Title title="another title" subtitle="another subtitle" /> */}


      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>hide events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>show event</button>
        </div>
      )}


      {showEvents && <EventList events={events} handleClick={handleClick} />
      // events.map((event, index) => (
      //   <React.Fragment key={event.id}>
      //     <h2>{index} - {event.title}</h2>
      //     <button onClick={() => handleClick(event.id) }>delete event</button>
      //   </React.Fragment>
      // ))
      }



      {/* <Modal>
        <h2>10% Off Coupon Code!!</h2>
        <p>Use the code NINJA10 at the checkout.</p>  
      </Modal> */}


      {showModal && <Modal
      // handleClose={handleClose}
      IsSalesModal={true}>
        {/* <h2>Terms and Condition</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, dolores blanditiis velit placeat hic quisquam aspernatur vitae dolorum dignissimos maxime illum qui itaque quis, perspiciatis nulla ex. Blanditiis voluptatum non quo modi, soluta eum totam dolore obcaecati nobis eaque sequi quae tempora? Explicabo reprehenderit aspernatur, adipisci aliquid atque quia nihil laudantium laborum a, nobis, maiores dicta reiciendis ut! Ut earum quasi, aliquid dolor dignissimos, dolore qui deleniti, ab aperiam rerum sapiente vitae reiciendis? Hic magni laborum, consequuntur officia nemo nam velit incidunt natus, provident libero tenetur consequatur amet blanditiis dolores voluptatem. Magnam odio quam reprehenderit expedita quos? Quas, cum ea?</p>
        <a href="/">find out more...</a> */}
        <NewEventForm addEvent={addEvent} />
      </Modal>}

      {!showModal && (
        <div>
          <button onClick={() => setShowModal(true)}>Add New Event</button>
        </div>
      )}
    </div>
  );
}

export default App;
