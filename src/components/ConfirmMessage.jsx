import React from 'react'


export default function ConfirmMessage(props) {

  const returnToForm = () => {
    props.showMessage(false)
  }

  return (
    <div className="contact-container" style={{height: '40vh', display: 'flex', justifyContent: 'space-evenly', flexDirection: 'column'}}>
        <h1 className="contact-message">Thanks <span>{props.userInputData.name}</span> for sending me a message about <span>{props.userInputData.subject}</span>!</h1>
        <p className="confirm">I will get back to you soon </p>
        <button type='button' className="btn-gradient-border" onClick={returnToForm} style={{fontSize: '20px' , borderRadius: '15px', padding: '8px',  cursor: 'pointer'}}>Send another message</button>
    </div>
  )
}





