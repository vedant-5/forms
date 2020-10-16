import React,{useState} from "react";
import "./cards.css";

const NewQuestion = ({addQuestion})=> {

    const [ques,setQues] = useState('');

    const handleSubmit = (event) =>{ 
        event.preventDefault();        
        addQuestion(ques);
      }
    
      
    return(
        <form onSubmit={handleSubmit} >
            <label className="ans">Input Question:</label>
            <input type="text" value={ques} required onChange={(e)=> setQues(e.target.value)}/>
            <input type="submit" value="add question"/>
        </form>
    )
        
}

export default NewQuestion;