import React from 'react';

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
      <input type="checkbox" />
      <p>item 1 </p>
      <input type="checkbox" />
      <p>item 2 </p>
    </div>
  )
}

export default MyInfo
