import React,{useState} from "react";
import { makeStyles, unstable_createMuiStrictModeTheme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


import NewAnswer from "./NewAnswer";

import "./cards.css";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 170,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


function Cards(){
  const classes = useStyles();
  const [option, setOption] = React.useState('');

  

  const [answers,setAnswer] = useState(
    [{title:"Bahama"},
     {title:"God Knows"}
  ])

  const addAnswer = (title) => {
    setAnswer([...answers,{title}])
  } 

  const handleChange = (event) => {
    setOption(event.target.value);
  };


    return(
        <div>
            <section className="card">
              <div>
                <form>
                  <label className="question" required>Question</label>
                  <input type="text"></input>
                </form>
                <div>
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

                <div>
                  <NewAnswer addAnswer = {addAnswer}/>
                  <ul>
                    {answers.map(ans=>{
                          return (
                              <form>
                                <div>
                                  <input type={option} for="answer"/>
                                  <label className="Answer" id="answer">{ans.title}</label>
                                </div>
                              </form>
                          ) 
                        })}
                  </ul>
                </div>
              </div>
              
            
            </section>
        </div>
    )
}



export default Cards;