import React, {useState} from "react";
import {connect} from "react-redux";
import {createTodo} from "./actions";
import "./NewTodoForm.css";

const NewTodoForm=({ todos, onCreatePressed })=>{
    const [inputValue, setInputValue] = useState("");
    
    return (
        <div className="new-todo-form">
            <input
                type="text" 
                placeholder="type your new todo here"
                className="new-todo-input" 
                value={inputValue} 
                onChange={e=> setInputValue(e.target.value)} 
                />
            <button 
            onClick={()=>{
                const idDuplicateText=todos.some(todo => todo.text === inputValue);
                if(!idDuplicateText){
                    onCreatePressed(inputValue);
                    setInputValue("");    
                }
            }}
            className="new-todo-button">Create todo</button>
        </div>
    );
};

const mapStateToProps= state => ({
    todos:state.todos
});

const mapDispatchProps = dispatch => ({
    onCreatePressed: text => dispatch(createTodo(text))
});

export default connect(mapStateToProps, mapDispatchProps)(NewTodoForm);