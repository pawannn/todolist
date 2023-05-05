import '../styles/task.css'

const Tasks = (props) => {
    return(
    <div className= { props.isComplete === true ? "tasks-complete" : "tasks-incomplete"}>
        {console.log(props.task)}
        <h1>{props.task}</h1>
        <input type = "checkbox" onChange={() => {props.setComplete(props.id)}}/> <label>Completed</label>
        <button onClick={() => props.deleteTodo(props.id)}>Delete</button>
    </div>
    )
}

export default Tasks