import React, {useEffect} from 'react';
import { useSelector } from "react-redux";


import { Trash2Fill, SendFill } from 'react-bootstrap-icons';


function ListView({todos, removeTodo, completeTodo}) {
    const [todoList, setTodoList] = React.useState([todos]);
    const tasksState = useSelector(state => state.task.data);
    console.log({tasksState})

    useEffect(() => {
        if(tasksState!==null){
            setTodoList(tasksState);
        }
    }, []);

    return (
        <ul className='list-group'>
            {
                todoList.map((todo, index) => {
                    return (
                        <li key={index} className="row shadow-sm">
                            <div className="form-check col-9 m-3">
                                {
                                    todo.is_completed &&
                                    (<div>
                                        <input className="form-check-input pt-1" type="checkbox" checked id="flexCheckDefault" onClick={() => completeTodo(todo)} />
                                        <label className="form-check-label pt-1 card-subtitle form-check-label border-0 text-dark strikeThrough" for="flexCheckDefault">
                                            {todo.title}
                                        </label>
                                    </div>)
                                }
                                {
                                    !todo.is_completed &&
                                    (<div>
                                        <input className="form-check-input pt-1" type="checkbox" id="flexCheckDefault" onClick={() => completeTodo(todo)} />
                                        <label className="form-check-label pt-1 card-subtitle form-check-label border-0 text-dark" for="flexCheckDefault">
                                            {todo.title}
                                        </label>
                                    </div>)
                                }
                            </div>
                            <button className='btn justify-content-right col-auto' onClick={() => removeTodo(todo.id)}><Trash2Fill className='global-icons-color' /></button>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default ListView
