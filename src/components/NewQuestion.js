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
            <label className="question">Input Question:</label>
            <input type="text" className="inputQues" value={ques} required onChange={(e)=> setQues(e.target.value)}/>
            <input className="submitQues" type="submit" value="Add Question"/>
        </form>
    )
        
}

export default NewQuestion;