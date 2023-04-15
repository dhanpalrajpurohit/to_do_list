import React from 'react'

function ListView(props) {
    const todoList = props.todos;
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
                                        <input className="form-check-input pt-1" type="checkbox" checked id="flexCheckDefault" onClick={() => handleClick(todo)} />
                                        <label className="form-check-label pt-1 card-subtitle form-check-label border-0 text-dark strikeThrough" for="flexCheckDefault">
                                            {todo.title}
                                        </label>
                                    </div>)
                                }
                                {
                                    !todo.is_completed &&
                                    (<div>
                                        <input className="form-check-input pt-1" type="checkbox" id="flexCheckDefault" onClick={() => handleClick(todo)} />
                                        <label className="form-check-label pt-1 card-subtitle form-check-label border-0 text-dark" for="flexCheckDefault">
                                            {todo.title}
                                        </label>
                                    </div>)
                                }
                            </div>
                            <button className='btn justify-content-right col-auto' onClick={() => handleComplete(todo.id)}><Trash2Fill className='global-icons-color' /></button>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default ListView
