import React ,{useRef,useState,useEffect} from 'react';
import '../styles/App.css';

//complete the following using forward refs concept 

const InputField=(props)=>{
    return(
    <div>
      <input id="input" type="text"  ref={props.ref}/>
    </div>
    )
    }
export default InputField;
