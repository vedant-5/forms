import React,{useState} from "react";
import "./cards.css";

const NewAnswer = ({addAnswer},{option})=> {

    const [title,setTitle] = useState('');

    const handleSubmit = (event) =>{ 
        event.preventDefault();        
        addAnswer(title);
        setTitle('')
      }
    
      
    return(
        <form onSubmit={handleSubmit} >
            <label className="ans">Input Answers:</label>
            <input type="text" value={title} required onChange={(e)=> setTitle(e.target.value)}/>
            <input type="submit" value="add answer"/>
        </form>
    )
        
}

export default NewAnswer;