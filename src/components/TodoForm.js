import { useState } from "react";
import Error from "./Error/Error";

function TodoForm({ onAdd }) {
    const [text, setText] = useState("");

    // text validation
    const isValid = (str) => {
        if(str && str.length <= 54) {
            return true
        }
        return false;
    }

    const inputText = (event) => {
        let text = event.target.value;
        setText(text)
    }

    // if the text is not valid
    const [show, setShow] = useState();
    const messageWindow = (event) =>{
        let text = event.target.value;
        if(isValid(text)) {
            setText(text);
            setShow(false);
        } else {
            setShow(true);
        }
        if (text.length == 0) {
            setShow(false);
        }
    }

    return (
        <form className="todoForm" onSubmit={(event) => {
            event.preventDefault();
            onAdd(text);
            setText("");
        }}>
            <div className="todoControls">

                <label htmlFor='todoInput' className="taskLabel">Task</label>

                <input onChange={(event) => { 
                    inputText(event); 
                    messageWindow(event);
                }} value={text} type='search' id="todoInput" className="todo_input" placeholder="Write here" autoComplete="off" style={
                    (!show) 
                    ?   {border:"1px solid #FFCD04"}
                    :   {border:"1px solid red"}
        
                }/>


                <Error show={show}/>
            </div>

            <button className="todoButton">Add</button>
        </form>
    )
}

export default TodoForm;