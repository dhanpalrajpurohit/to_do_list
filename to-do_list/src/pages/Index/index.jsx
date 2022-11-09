import React from 'react';
import './index.css';

import List from '../../component/list/List';
import Header from '../../component/header/Header';

function Index() {
  let [todos, setTodos] = React.useState([]);
  let [text, setText] = React.useState("");
  const handlechange = (e) => {
    setText(e.target.value);
  }

  const handleAdd = (e) => {
    if (text !== null) {
      const item = [...todos, text];
      setTodos(item);
      setText("");
    }
  }

  const handleRemove = id => {
    let oldItems = todos;
    const item = oldItems.filter((element, index) => {
      return index !== id
    });
    setTodos(item);
  }

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 text-white mx-auto shadow-lg m-3">
            <h2 className='text-center'>Today's Plan</h2>
            <div className="container-fluid">
              <div className="row m-3">
                <div className="col-9">
                  <input type="text" className="form-control" placeholder="Today's Plane" value={text} onChange={handlechange} />
                </div>
                <div className="col-3">
                  <button type="text" className="btn btn-warning fw-bold" onClick={handleAdd}>Button</button>
                </div>
              </div>
              <div className="row">
                <ul className="list-unstyled m-4">
                  {
                    todos?.map((value, i) => {
                      return <List key={i} id={i} value={value} sendData={handleRemove} />
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
