
import React,{useState} from "react";
import './../styles/App.css';
import Modal from "./Modal";

const App = () => {
  const[show, setShow] = useState(false)
  return (
    <div>
        {/* Do not remove the main div */}
        <button onClick={()=>setShow(true)} className="show-model">Show Modal</button>
        {show ? <Modal setShow={setShow}/>: null}
        
    </div>
  )
}

export default App
