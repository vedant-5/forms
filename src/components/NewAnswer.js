import React,{useState} from "react";
import "./cards.css";

import Button from '@material-ui/core/Button';

const NewAnswer = ({addAnswer})=> {

    const [title,setTitle] = useState('');

    const handleSubmit = (event) =>{ 
        event.preventDefault();        
        addAnswer(title);
        setTitle('')
      }
    
      
    return(
        <form onSubmit={handleSubmit}  style={{marginBottom:"20"}}>
            <label className="ans">Input Answers</label>
            <input type="text" className="inputAns" value={title} required onChange={(e)=> setTitle(e.target.value)}/>
            <input type="submit" className="submitAns" value="Add answer"/>
            <Button variant="outlined" color="secondary">
                  Remove Option
            </Button>
        </form>
    )
        
}

export default NewAnswer;