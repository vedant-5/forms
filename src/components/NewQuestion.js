import React,{useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import "./cards.css";


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '50ch',
      },
    },
  }));



const NewQuestion = ({addQuestion})=> {

    const [ques,setQues] = useState('');

    const handleSubmit = (event) =>{ 
        event.preventDefault();        
        addQuestion(ques);
      }

    
    const classes = useStyles();
      
    return(
        <form onSubmit={handleSubmit} className="quesForm">
            <label className="question">Input Question:</label>
            <input type="text" className="inputQues" value={ques} label= "Input Question" onChange={(e)=> setQues(e.target.value)}/>
            <input className="submitQues" type="submit" value="Add Question"/>
            
        </form>
    )
        
}

export default NewQuestion;

//
//
//<TextField id="outlined-basic" label="Input Question" variant="outlined" />