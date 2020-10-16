import React,{useState,useEffect} from "react";
import { makeStyles, unstable_createMuiStrictModeTheme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


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
}));


function Cards(){
  const classes = useStyles();

  const [option, setOption] = React.useState('');


  const [questions,setQuestion] = useState([]);

  const addQuestion = (ques)=>{
    setQuestion([...questions,{ques}])
  }


  const [answers,setAnswer] = useState([])

  const addAnswer = (title) => {
    setAnswer([...answers,{title}])
  } 


  const handleChange = (event) => {
    setOption(event.target.value);
  };

  const nextQuestion = (ques,title)=> {
    setQuestion([...questions],{ques});
    setAnswer([...answers],{title});
  }

  

 


    return(
        <div className="quiz">
            <section className="inputSide">
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

                  <button onClick={nextQuestion}>New question</button>

                </div>
            </section>
              
            
            <section className="livePreview">
                <div>
                  {questions.map(qus=>{
                    return(
                      <p>{qus.ques}</p>
                    )
                  })}
                </div>
                <ul>
                  {answers.map(ans=>{
                        return (
                            <form>
                              <div>
                                <input type={option} for="answer"/>
                                <label className="Answer" id="answer" style={{visibility: option !== "text" ? "visible" : "hidden"}}>{ans.title}</label>
                              </div>
                            </form>
                        ) 
                      })}
                </ul>
              
            </section>           
        </div>
    )
}



export default Cards;