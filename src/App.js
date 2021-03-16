import "./App.css";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { FormControl, Input, InputLabel } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import Todo from "./Todo";
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  console.log(input);

  useEffect(( )=>{
     db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
       setTodos(snapshot.docs.map(doc => ({ id:doc.id, todo:doc.data().todo})))
     })
  }, []); 

  const addTodo = (event) => {
    event.preventDefault();
    
    db.collection('todos').add({
      todo:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput("");
  };

  return (
    <div className="App">
      <h1>Welcome to our TODO-LIST Web Application</h1>
      <form>
        <FormControl>
          <InputLabel>Write a todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>

        <Button
          disabled={!input}
          variant="contained"
          color="primary"
          onClick={addTodo}
          type="submit"
        >
          Add Todo
        </Button>
      </form>

      <ul>
        {todos.map(todo => (
          <Todo todo={todo}/>
          // <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
