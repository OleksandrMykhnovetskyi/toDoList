import DeleteIcon from '@mui/icons-material/Delete';
import { useContext } from 'react';
import { Context } from './context';

const Todo = (props) => {
    const {id, title, checked} = props.todo
    const {deleteTodo, toggleCheck} = useContext(Context)

    const classEl = ["todo-li"]
    if(checked){
        classEl.push("completed")
    }

    return(
        <li className={classEl.join(" ")}>
            <input
                className="checkbox"
                type="checkbox"
                value = {checked}
                checked = {checked}
                onChange = {()=>toggleCheck(id)}
                
             />
            <p 
                className='todo-text'
                onClick={()=>toggleCheck(id)} 
                >{title}</p>
            <i 
                className='delete-icon'
                onClick = {() => deleteTodo(id)}
                ><DeleteIcon/></i>
        </li>
    )
}

export default Todo