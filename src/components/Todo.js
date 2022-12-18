import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faTrash} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";
import {updateCreator} from "../store/todoReducer";


const Todo = ({todo, removeTodo}) => {
    const [edit, setEdit] = useState(false);
    const [istask, setTask] = useState(todo.task)
    const dispatch = useDispatch();
    return (
        <div className="task__item">
            <div className="task__item-content">
                {edit ? (
                    <input onChange={(e) => setTask(e.target.value)} className='input_edit' value={istask} type="text"/>
                ) : <h4>{todo.task}</h4>}
                <p></p>
                <span>Deadline : {todo.date}</span>
            </div>
            <div className="task__item-btn">
                <div className='edit' onClick={() => {
                    if (edit) {
                        setTask(todo.task);
                        dispatch(updateCreator({
                            ...todo,
                            task:todo.task
                        }))
                    }
                    setEdit(!edit)
                }}>{edit ? 'update' : <FontAwesomeIcon icon={faPen}/>}</div>
                <div className='delete' onClick={removeTodo}><FontAwesomeIcon icon={faTrash}/></div>
            </div>
        </div>
    );
};

export default Todo;