import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";


import { Trash2Fill, SendFill } from 'react-bootstrap-icons';


function ListView({ todos, removeTodo, completeTodo }) {
    const dispatch = useDispatch();
    const [todoList, setTodoList] = React.useState([]);
    const tasksState = useSelector(state => state.task.data);

    useEffect(() => {
        if (tasksState !== null) {
            setTodoList(tasksState);
        }
    }, []);

    useEffect(() => {
        setTodoList(tasksState);
    }, [tasksState]);

    const todoTitle = (todo) => (
        todo.is_completed ?
            <label className="form-check-label pt-1 card-subtitle form-check-label border-0 text-dark strikeThrough" for="flexCheckDefault">
                {todo.title}
            </label> :
            <label className="form-check-label pt-1 card-subtitle form-check-label border-0 text-dark" for="flexCheckDefault">
                {todo.title}
            </label>
    )

    const renderTodo = () => todoList && todoList.length > 0 && todoList?.map((todo, index) => {
        return (
            <li key={index} className="row shadow-sm">
                <div className="form-check col-9 m-3">
                    {
                        (<div>
                            {/* <input className="form-check-input pt-1" type="checkbox" checked id="flexCheckDefault" onClick={() => completeTodo(todo)} /> */}
                            {todoTitle(todo)}
                        </div>) 
                    }
                </div>
                <button className='btn justify-content-right col-auto' onClick={() => removeTodo(todo)}><Trash2Fill className='global-icons-color' /></button>
            </li>
        )
    })

    return (
        <ul className='list-group'>
            {
                tasksState?.length > 0 ? renderTodo() : null
            }
        </ul>
    )
}

export default ListView
