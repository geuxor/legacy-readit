import React, {useState} from 'react'
import {AppContext} from '../Dashboard/Dashboard'
import './Modal.css'

export default function Modal(props) {
  

  return (
    <div className="modal-container">
      <div className="single-book-modal">
        <h4 className="description-title-modal">Description</h4>
        {props.showModal? <p className="body-description-modal">{props.book.volumeInfo.description}</p> : null}
        <button className="button-modal" onClick={props.openModal}>X</button>
      </div>
    </div>
    
  )
}
