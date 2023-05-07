import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Trash2Fill, SendFill } from 'react-bootstrap-icons';


import './index.css';
import Header from '../../component/header/Header';
import ListView from '../../component/ListView/ListView';

import { getProfileAPI } from "../../store/services/authentication";
import { getTasksAPI, updateSingleTaskAPI, postTaskAPI, deleteSingleTaskAPI } from "../../store/services/task";


let newDate = new Date();
let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const monthlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let date = newDate.getDate();
let month = newDate.getMonth();
let day = newDate.getDay();
let year = newDate.getFullYear();


function Index() {
  const dispatch = useDispatch();
  let [showInputText, setShowInputText] = React.useState(false);
  const userState = useSelector(state => state.user.data);
  const tasksState = useSelector(state => state.task.data);
  const [todoList, setTodoList] = React.useState([]);
  const [todos, setTodos] = React.useState();
  let [value, setValue] = React.useState();

  useEffect(() => {
    const fetchTodo = async () => {
      dispatch(getProfileAPI());
      if (userState && userState.user && userState.user.email) {
        dispatch(getTasksAPI(userState.user));
        setTodoList(tasksState);
        setTodos(
          <ListView todos={todoList} removeTodo={handleComplete} completeTodo={handleClick} />
        )
      }
    }
    fetchTodo();
  }, [dispatch]);

  useEffect(() => {
    console.log(userState);
    const fetchTodo = async () => {
      if (userState && userState.user && userState.user.email) {
        dispatch(getTasksAPI(userState.user));
        if (tasksState !== null) {
          setTodoList(tasksState);
          setTodos(
            <ListView todos={todoList} removeTodo={handleComplete} completeTodo={handleClick} />
          )
        }
      }
    }
    fetchTodo();
  }, [userState]);

  useEffect(() => {
    if (tasksState !== null) {
      setTodoList(tasksState);
      setTodos(
        <ListView todos={todoList} removeTodo={handleComplete} completeTodo={handleClick} />
      )
    }
  }, [tasksState]);

  const handleComplete = async(todo) => {
    console.log(todo);
    const data = {
      "email": userState.user.email,
      "id": todo.id,
    }
    await dispatch(deleteSingleTaskAPI(data));
    await dispatch(getTasksAPI(userState.user));
    if (tasksState !== null) {
      setTodoList(tasksState);
      setTodos(
        <ListView todos={todoList} removeTodo={handleComplete} completeTodo={handleClick} />
      )
    }
  }

  const handleClick = async(todo) => {
    const data = {
      "email": userState.user.email,
      "id": todo.id,
      "is_completed": !todo.is_completed,
      "title": todo.title
    }
    dispatch(updateSingleTaskAPI(data));
    if (tasksState?.lenght > 0) {
      setTodos(
        <ListView todos={todoList} removeTodo={handleComplete} completeTodo={handleClick} />
      )
    }
  }

  const addHandleClick = async() => {
    const data = {
      "email": userState.user.email,
      "is_completed": false,
      "title": value
    }
    await dispatch(postTaskAPI(data));
    await dispatch(getTasksAPI(userState.user));
    if (tasksState !== null) {
      setTodoList(tasksState);
      setTodos(
        <ListView todos={todoList} removeTodo={handleComplete} completeTodo={handleClick} />
      )
    }
    setValue("");
  }

  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 text-white mx-auto m-3">
            <div className="container">
              <div className="card mx-auto" style={{ width: "30rem" }}>
                <div className="card-body">
                  <h5 className="card-header">{weekdays[day]}</h5>
                  <h6 className='text-muted text-center'>{monthlist[month]} {date}, {year} </h6>
                  <div className='p-3'>
                    <ul className='list-group'>
                      {todos}
                    </ul>
                    {showInputText && <div className="input-group mt-3">
                      <input type="text" value={value} className="form-control text-dark" placeholder="Enter here..." aria-describedby="button-addon2" onChange={(e) => setValue(e.target.value)} />
                      <button className="btn" type="button" onClick={() => addHandleClick()}><SendFill className='global-icons-color' /></button>
                    </div>}
                  </div>
                </div>
              </div>
            </div>
            {!showInputText && <div className="text-center btn-center">
              <button type="button" className="btn btn-primary btn-lg rounded-circle" onClick={() => setShowInputText(true)}><b>+</b></button>
            </div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;

