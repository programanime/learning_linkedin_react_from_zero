import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";

const TodoList=({ todos = [{}] }) =>  ( 
    <div className="list-wrapper">
        <NewTodoForm />
        {
            todos.map(todo=><TodoListItem to do={todo} />)
        }
    </div>
);

export default TodoList;
