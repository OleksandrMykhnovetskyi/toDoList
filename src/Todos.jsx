import Todo from "./Todo"

const Todos = (props) => {

    const todoElements = props.todos.map((todo)=>{
        return <Todo
                 key={todo.id}
                 todo= {todo}
                 />
    })

    return(
        <div className="todos">
            <ul>
                {todoElements}
            </ul>
        </div>
    )
}

export default Todos