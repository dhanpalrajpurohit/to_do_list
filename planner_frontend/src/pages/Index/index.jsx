import React, {useEffect} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import './index.css';

import { Trash2Fill, SendFill } from 'react-bootstrap-icons';
// import List from '../../component/list/List';
import Header from '../../component/header/Header';
import {axiosInstance} from '../../Axios.jsx';

const intial_task = [
  {
    "task": "meditation"
  }
]

function Index() {
  let [showInputText, setShowInputText] = React.useState(false);
  const [todoList, setTodoList] = React.useState(intial_task);
  let [value, setValue] = React.useState();

  let newDate = new Date();
  let weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  const monthlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let day = newDate.getDay() + 1;
  let year = newDate.getFullYear();

  const handleClick = () => {
    const id = todoList.length + 1;
    if (value !== "") {
      setTodoList((prev) => [
        ...prev,
        {
          id: id,
          task: value,
          complete: false,
        }
      ]);
    }
    setValue("");
  };

  const handleComplete = (id) => {
    const list = todoList.filter((task) => task.id !== id);
    setTodoList(list);
    if (todoList.length === 0) {
      setShowInputText(false);
    }
  };

  useEffect(() => {
    axiosInstance({
      url: "get-token/",
      method: "POST",
      data: details,
    }).then((response) => {
      const data = response.data;
      const token = data.token;
      localStorage.setItem('token',token)
      Navigate("/dashboard");
   });
  });

  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 text-white mx-auto m-3">
            <div className="container">
              <div class="card mx-auto" style={{ width: "30rem" }}>
                <div class="card-body">
                  <h5 class="card-header">{weekdays[day]}</h5>
                  <h6 className='text-muted text-center'>{monthlist[month]} {date}, {year} </h6>
                  <div className='p-3'>
                    <ul className='list-group'>
                      {todoList.map((todo, index) => {
                        return (
                          <li key={index} className="row shadow-sm">
                            <div class="form-check col-9 m-3">
                              <input class="form-check-input pt-1" type="checkbox" value="" id="flexCheckDefault" />
                              <label class="form-check-label pt-1 card-subtitle form-check-label border-0 text-dark" for="flexCheckDefault">
                                {todo.task}
                              </label>
                            </div>
                            <button className='btn justify-content-right col-auto' onClick={() => handleComplete(todo.id)}><Trash2Fill className='global-icons-color'/></button>
                          </li>
                        )
                      })}
                    </ul>
                    {showInputText && <div class="input-group mt-3">
                      <input type="text" value={value} class="form-control text-dark" placeholder="Enter here..." aria-describedby="button-addon2" onChange={(e) => setValue(e.target.value)}/>
                        <button class="btn" type="button" onClick={() => handleClick()}><SendFill  className='global-icons-color' /></button>
                    </div>}
                  </div>
                </div>
              </div>
            </div>
            {!showInputText && <div class="text-center btn-center">
              <button type="button" class="btn btn-primary  btn-lg rounded-circle" onClick={() => setShowInputText(true)}><b>+</b></button>
            </div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
