import React from "react"
import Tasks from "./components/Tasks";
import './styles/index.css'

const Index = () => {
    const [todolist, addTodolist] = React.useState([]);
    const [taskname, setTaskName] = React.useState("");

    //functions
    const handleTaskName = (e) => {
        setTaskName(e.target.value);
    }

    const handletodolist = () => {
        console.log(1)
        const newTodo = {
            id : todolist.length === 0 ? 1 : todolist[todolist.length - 1].id + 1,
            task : taskname,
            isComplete : false,
        }

        addTodolist([...todolist, newTodo]);
        console.log(todolist)
    }

    const deleteTodo = (id) => {
        const newList = todolist.filter(todo => todo.id !== id);
        addTodolist(newList);
    }

    const setComplete = (id) => {
        const newList = todolist.filter(todo => {
            if(todo.id == id){
                todo.isComplete = true
                return true
            }
            else{
                return true
            }
        })
        
        addTodolist(newList)
    }

    return(
        <div className = "container">
            <div className = "header">
                <input type = "text" onChange={handleTaskName} />
                <button onClick={handletodolist}>Add todo</button>
            </div>
            <div className = "list">
                { todolist.map((todo, key) => {
                    return <Tasks 
                    key = {key} 
                    id = {todo.id}
                    task = {todo.task} 
                    isComplete = {todo.isComplete}
                    deleteTodo = {deleteTodo}
                    setComplete = {setComplete}  />
                }) }
            </div>
        </div>
    )
}

export default Index