import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Trash2Fill, SendFill } from 'react-bootstrap-icons';


import './index.css';
import Header from '../../component/header/Header';

import { axiosInstance } from '../../Axios.jsx';
import { getProfileAPI } from "../../store/services/authentication";
import { getTasksAPI, updateSingleTaskAPI } from "../../store/services/task";


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
  let [value, setValue] = React.useState();

  useEffect(() => {
    const fetchTodo = async () => {
      dispatch(getProfileAPI());
      if (userState && userState.user && userState.user.email) {
        dispatch(getTasksAPI(userState.user));
        setTodoList(tasksState);
      }
    }
    fetchTodo();
  }, [dispatch]);

  useEffect(() => {
    const fetchTodo = async () => {
      if (userState && userState.user && userState.user.email) {
        dispatch(getTasksAPI(userState.user));
        setTodoList(tasksState);
      }
    }
    fetchTodo();
  }, [userState]);

  // useEffect(() => {
  //   const fetchTodo = async () => {
  //     if (data && data.user && (data.user.email !== undefined && data.user.email !== null)) {
  //       await dispatch(getTasksAPI(data.user));
  //       setTodoList(task);
  //     }
  //   }
  //   fetchTodo();
  // }, [task]);

  const handleComplete = (id) => {
    axiosInstance({
      url: `task/${userState.user.email}/${id}/`,
      method: "DELETE",
      headers: {
        'Authorization': `token ${localStorage.getItem('token')}`
      }
    }).then((response) => {
      if (response.status === 204) {
        return axiosInstance({
          url: `tasks/${userState.user.email}/`,
          method: "GET",
          headers: {
            'Authorization': `token ${localStorage.getItem('token')}`
          }
        }).then((response) => {
          const data = response.data;
          setTodoList(data.tasks);
        });
      }
    });
  }

  const handleClick = (todo) => {
    const data = {
      "email": userState.user.email,
      "id": todo.id,
      "is_completed": !todo.is_completed,
      "title": todo.title
    }
    dispatch(updateSingleTaskAPI(userState));
    setTodoList(tasksState);
  }

  const todoListView = (
    todoList !== null && todoList !== [] && todoList.map((todo, index) => {
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
  )

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
                      {todoListView}
                    </ul>
                    {showInputText && <div className="input-group mt-3">
                      <input type="text" value={value} className="form-control text-dark" placeholder="Enter here..." aria-describedby="button-addon2" onChange={(e) => setValue(e.target.value)} />
                      <button className="btn" type="button" onClick={() => handleClick()}><SendFill className='global-icons-color' /></button>
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

