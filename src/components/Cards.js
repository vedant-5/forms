import React,{useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Container from '@material-ui/core/Container';


import NewAnswer from "./NewAnswer";
import NewQuestion from "./NewQuestion";
import "./cards.css";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 160,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  }
}));


function Cards(){
  const classes = useStyles();

  const [option, setOption] = React.useState('');


  const [questions,setQuestion] = useState([]);

  const addQuestion = (ques)=>{
    setQuestion([{ques}])
  }


  const [answers,setAnswer] = useState([])

  const addAnswer = (title) => {
    setAnswer([...answers,{title}])
  } 


  const handleChange = (event) => {
    setOption(event.target.value);
  };

 

    return(
        <div className="quiz">
            <section className="inputSide">
            <Container fixed>
              <div>
                  <NewQuestion addQuestion={addQuestion}/>

                  <div className="dropDown">
                    <FormControl className={classes.formControl}>
                      <InputLabel id="demo-simple-select-label" className="dropText">Type of Question</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={option}
                            onChange={handleChange}
                        >
                        <MenuItem value={"radio"}>MCQ</MenuItem>
                        <MenuItem value={"text"}>Single Line</MenuItem>
                        <MenuItem value={"checkbox"}>Checkbox</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
              
                  <NewAnswer addAnswer={addAnswer} option={option}/>
                </div>

                
              </Container>  
            </section>
              
            
            <section className="livePreview">
            <Container fixed>
                <div>
                  {questions.map(qus=>{
                    return(
                      <p className="quesOutput">{qus.ques}</p>
                    )
                  })}
                </div>
                <ul className="ansList">
                  {answers.map(ans=>{
                        return (
                            <form>
                              <div >
                                <input type={option} for="answer"/>
                                <label className="Answer" id="answer" style={{visibility: option !== "text" ? "visible" : "hidden"}}>{ans.title}</label>
                              </div>
                            </form>
                        ) 
                      })}
                </ul>

                
              </Container>

            </section>           
        </div>
    )
}



export default Cards;