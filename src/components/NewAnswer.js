import React,{useState} from "react";
import "./cards.css";

const NewAnswer = ({addAnswer})=> {

    const [title,setTitle] = useState('');

    const handleSubmit = (event) =>{ 
        event.preventDefault();        
        addAnswer(title);
        setTitle('')
      }
    
      
    return(
        <form onSubmit={handleSubmit} >
            <label className="ans">Input Answers:</label>
            <input type="text" className="inputAns" value={title} required onChange={(e)=> setTitle(e.target.value)}/>
            <input type="submit" className="submitAns" value="Add answer"/>
        </form>
    )
        
}

export default NewAnswer;