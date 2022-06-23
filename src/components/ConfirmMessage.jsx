import React from 'react'


export default function ConfirmMessage(props) {

  const returnToForm = () => {
    props.showMessage(false)
  }

  return (
    <div className="contact-container" style={{height: '40vh', display: 'flex', justifyContent: 'space-evenly', flexDirection: 'column'}}>
        <h2>Thanks {props.userInputData.name} for sending me a message about {props.userInputData.subject}!</h2>
        <h2>I will get back to you soon </h2>
        <button type='button' className="btn-gradient-border" onClick={returnToForm} style={{fontSize: '20px' , borderRadius: '15px', padding: '8px',  cursor: 'pointer'}}>Send another message</button>
    </div>
  )
}





