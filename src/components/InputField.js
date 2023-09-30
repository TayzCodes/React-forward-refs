import React ,{useRef,forwardRef,useEffect} from 'react';
import '../styles/App.css';

//complete the following using forward refs concept 

const InputField=(props, ref)=>{
    return(
    <div>
      <input id="input" type="text"  ref={ref}/>
    </div>
    )
    }
export default forwardRef(InputField);
