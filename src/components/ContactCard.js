import React from 'react'

function ContactCard(props) {
  return (
    <div className="contact-card">
      <img src={props.contact.imgUrl} />
      <h3 style={{display: props.contact.name ? "block" : "none"}>Name: {props.contact.name}</h3>
      <p>phone: {props.contact.phone}</p>
      <p>email: {props.contact.email}</p>
    </div>
  )
}

export default ContactCard
