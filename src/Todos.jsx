import Todo from "./Todo"

const Todos = (props) => {

    const todoElements = props.todos.map((todo)=>{
        return <Todo
                 key={todo.id}
                //  id={todo.id} 
                //  title={todo.title} 
                //  completed={todo.completed}
                todo= {todo}
                 deleteTodo={props.deleteTodo}
                 toggleCheck= {props.toggleCheck}
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