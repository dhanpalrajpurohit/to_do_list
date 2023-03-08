import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { Trash2Fill, SendFill } from 'react-bootstrap-icons';

import './index.css';
import Header from '../../component/header/Header';

import { axiosInstance } from '../../Axios.jsx';


let newDate = new Date();
let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const monthlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let date = newDate.getDate();
let month = newDate.getMonth();
let day = newDate.getDay();
let year = newDate.getFullYear();

function Index() {
  const initialRender = useRef(true);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  let [showInputText, setShowInputText] = React.useState(false);
  const { isLoading, isError, isSuccess, errorMsg, data } = useSelector((state) => state.user);;
  const [user, setUser] = React.useState({ "name": null, "email": null, "profile_picture": null });
  const [todoList, setTodoList] = React.useState([]);
  let [value, setValue] = React.useState();

  useEffect(() => {
    if (!initialRender.current) {
      if (isSuccess) {
        setUser(data.user);
      } else {
        navigate("/");
      }
    } else {
      initialRender.current = false;
    }
    if (token === null) {
      navigate("/");
    }
  }, [isSuccess]);

  const handleComplete = (id) => {
    axiosInstance({
      url: `task/${user.email}/${id}/`,
      method: "DELETE",
      headers: {
        'Authorization': `token ${localStorage.getItem('token')}`
      }
    }).then((response) => {
      if (response.status === 204) {
        return axiosInstance({
          url: `tasks/${user.email}/`,
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

  const handleClick = () => {
    const id = todoList.length + 1;
    let data = {}
    if (value !== "") {
      data = {
        id: id,
        title: value,
        complete: false,
      }
      setTodoList((prev) => [
        ...prev,
        data
      ]);
      axiosInstance({
        url: `tasks/${user.email}/`,
        method: "POST",
        data: data,
        headers: {
          'Authorization': `token ${localStorage.getItem('token')}`
        }
      }).then((response) => {
        if (response.status === 200) {
          return axiosInstance({
            url: `tasks/${user.email}/`,
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
    setValue("");
  };


  return (
    <div>
      <Header userdetail={user} />
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
                      {todoList.map((todo, index) => {
                        return (
                          <li key={index} className="row shadow-sm">
                            <div className="form-check col-9 m-3">
                              <input className="form-check-input pt-1" type="checkbox" value="" id="flexCheckDefault" />
                              <label className="form-check-label pt-1 card-subtitle form-check-label border-0 text-dark" for="flexCheckDefault">
                                {todo.title}
                              </label>
                            </div>
                            <button className='btn justify-content-right col-auto' onClick={() => handleComplete(todo.id)}><Trash2Fill className='global-icons-color' /></button>
                          </li>
                        )
                      })}
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
