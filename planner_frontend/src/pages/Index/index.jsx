import React, {useEffect} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import './index.css';

import { Trash2Fill, SendFill } from 'react-bootstrap-icons';
// import List from '../../component/list/List';
import Header from '../../component/header/Header';
import {axiosInstance} from '../../Axios.jsx';

const intial_task = [
  {
    "title": "meditation"
  }
]

function Index() {
  let [showInputText, setShowInputText] = React.useState(false);
  const [todoList, setTodoList] = React.useState(intial_task);
  let [value, setValue] = React.useState();

  let newDate = new Date();
  let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const monthlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  let date = newDate.getDate();
  let month = newDate.getMonth();
  let day = newDate.getDay();
  let year = newDate.getFullYear();

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
        data: data
      }).then((response) => {
        if(response.status===200){
          return axiosInstance({
            url: `tasks/${user.email}/`,
            method: "GET"
          }).then((response) => {
            const data = response.data;
            setTodoList(data.tasks);
         });
        }
      });
    }
    setValue("");
  };

  const handleComplete = (id) => {
    // const list = todoList.filter((task) => task.id !== id);
    // setTodoList(list);
    // if (todoList.length === 0) {
    //   setShowInputText(false);
    // }
    axiosInstance({
      url: `task/${user.email}/${id}/`,
      method: "DELETE"
    }).then((response) => {
      if(response.status===204){
        return axiosInstance({
          url: `tasks/${user.email}/`,
          method: "GET"
        }).then((response) => {
          const data = response.data;
          setTodoList(data.tasks);
       });
      }
    });
  }

  const [user, setUser] = React.useState({"name":null, "email": null})
  useEffect(() => {
    axiosInstance({
      url: "get-profile/",
      method: "GET"
    }).then((response) => {
      const data = response.data.user;
      setUser({"name": data.name, "email": data.email});
      return axiosInstance({
        url: `tasks/${data.email}/`,
        method: "GET"
      }).then((response) => {
        const data = response.data;
        setTodoList(data.tasks);
     });
   });
  }, []);

  
  return (
    <div>
      <Header userdetail={user}/>
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
                            <button className='btn justify-content-right col-auto' onClick={() => handleComplete(todo.id)}><Trash2Fill className='global-icons-color'/></button>
                          </li>
                        )
                      })}
                    </ul>
                    {showInputText && <div className="input-group mt-3">
                      <input type="text" value={value} className="form-control text-dark" placeholder="Enter here..." aria-describedby="button-addon2" onChange={(e) => setValue(e.target.value)}/>
                        <button className="btn" type="button" onClick={() => handleClick()}><SendFill  className='global-icons-color' /></button>
                    </div>}
                  </div>
                </div>
              </div>
            </div>
            {!showInputText && <div className="text-center btn-center">
              <button type="button" className="btn btn-primary  btn-lg rounded-circle" onClick={() => setShowInputText(true)}><b>+</b></button>
            </div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
