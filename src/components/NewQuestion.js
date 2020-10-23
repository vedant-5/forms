import React,{useState} from "react";


import "./cards.css";





const NewQuestion = ({addQuestion})=> {

    const [ques,setQues] = useState('');

    const handleSubmit = (event) =>{ 
        event.preventDefault();        
        addQuestion(ques);
      }

    
  
      
    return(
        <form onSubmit={handleSubmit} className="quesForm">
            <label className="question">Input Question</label>
            <input type="text" className="inputQues" value={ques} label= "Input Question" onChange={(e)=> setQues(e.target.value)}/>
            <input className="submitQues" type="submit" value="Add Question"/>
            
        </form>
    )
        
}

export default NewQuestion;

