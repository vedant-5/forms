import React,{useState} from "react";
import Cards from "./Cards";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



import "./quiz.css";

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 4,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',

  },
}));

function Quiz() {
  
  const classes = useStyles();

  const count = 0;

  const [click, setClick] = useState([
    {value: count}
  ]);

  const addNew = () => {
    setClick([...click, { value: count+1 }]);
    console.log(click);
  }

  return (
    <div className="bod">
       
          <header className="head">
            QUIZ 
          </header>
          <hr/>
        <Container fixed>
          <div>

            <div className="newQ">
              <Button onClick={addNew} className={classes.root}  >
                  ADD A NEW QUESTION
              </Button>

            </div>
            
            

            {click.map(() => {
              return( <div className="card"> <Cards /> </div> );
            })}
          </div>
       </Container>
      
    </div>
  );
}



export default Quiz;
