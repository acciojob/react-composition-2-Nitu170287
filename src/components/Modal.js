import React from "react"
import './../styles/App.css';

const Modal = ({setShow})=>{


    return(
        <div className="model-overlay">
            <button className="model-close" onClick={()=>setShow(false)}>Close</button>
            <p className="model-p">This is the content of the modal.</p>
        </div>
    )
}

export default Modal