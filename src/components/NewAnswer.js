import React,{useState} from "react";

const NewAnswer = ({addAnswer})=> {

    const [title,setTitle] = useState('');

    const handleSubmit = (event) =>{ 
        event.preventDefault();        
        addAnswer(title);
      }
    
      
    return(
        <form onSubmit={handleSubmit} >
            <label>Input Answers:</label>
            <input type="text" value={title} required onChange={(e)=> setTitle(e.target.value)}/>
            <input type="submit" value="add answer"/>
        </form>
    )
        
}

export default NewAnswer;