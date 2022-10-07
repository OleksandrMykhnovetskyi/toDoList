import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';

const Todo = (props) => {

    const [checkedStatus, setCheckedStatus] = useState(props.todo.checked)
    const classEl = ["todo-li"]
    if(checkedStatus){
        classEl.push("completed")
    }

    return(
        <li className={classEl.join(" ")}>
            <input
                className="checkbox"
                type="checkbox"
                value = {props.todo.checked}
                checked = {checkedStatus}
                onChange = {()=>setCheckedStatus(!checkedStatus)}
             />
            <p 
                className='todo-text'
                onClick={()=>props.toggleCheck(props.todo.id)}
                >{props.todo.title}</p>
            <i 
                className='delete-icon'
                onClick = {() => props.deleteTodo(props.todo.id)}
                ><DeleteIcon/></i>
        </li>
    )
}

export default Todo