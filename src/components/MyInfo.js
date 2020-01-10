import React from 'react';
import ToDoItem from './ToDoItem'
import ContactCard from './ContactCard'
import '../App.css';

function MyInfo() {
  const firstName = "Josh"
  const lastName = "Davies"

  const hours = new Date().getHours()

  function timeOfDay(hours) {
    return hours < 12 ? 'morning'
         : hours < 17 ? 'afternoon'
         : 'evening'
  }

  const styles = {
    color: "#FF8C00",
    backgroundColor: "black"
  }

  return (
    <div>
      <h1>Name: {firstName + " " + lastName}</h1>
      <h1> Name: {`${firstName} ${lastName}`}</h1>
      <p style={styles}>learning react.js this {timeOfDay(hours)}.</p>
      <ul style={{color: "white", backgroundColor: "black"}}>
        <li>one</li>
        <li>two</li>
        <li>three</li>
      </ul>
      <div className="todo-list">
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
        <div className="contacts">
        <ContactCard
            contact={{name: "Mr. Whiskerson", imgUrl: "http://placekitten.com/300/200", phone: "(212) 555-1234", email: "mr.whiskaz@catnap.meow"}}
        />

        <ContactCard
            contact={{name: "Fluffykins", imgUrl: "http://placekitten.com/400/200", phone: "(212) 555-2345", email: "fluff@me.com"}}
        />

        <ContactCard
            contact={{name: "Destroyer", imgUrl: "http://placekitten.com/400/300", phone: "(212) 555-3456", email: "ofworlds@yahoo.com"}}
        />

        <ContactCard
            contact={{name: "Felix", imgUrl: "http://placekitten.com/200/100", phone: "(212) 555-4567", email: "thecat@hotmail.com"}}
        />

        </div>
      </div>
    </div>
  )
}

export default MyInfo
