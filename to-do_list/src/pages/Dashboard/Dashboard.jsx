import React from 'react'
import List from '../../component/list/List';

function Dashboard() {
  
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

    const handleShare = () => {
      axiosInstance({
        url: "accounts/login/",
        method: "POST",
        data: details,
      }).then((response) => {
        const data = response.data;
        const token = data.token;
        localStorage.setItem('token', token)
        navigate("/profile");
      })
      .catch((error) => {
        const error_msg = error.response.data;
        console.log(error_msg)
        setError({"login_details": error_msg['errors']});
      });
    }

  return (
    <div className="container-fluid">
        <div className="row">
          <div className="col-sm-8 text-white mx-auto shadow-lg m-3">
            <h2 className='text-center'>Today's Plan</h2>
            <div className="container-fluid">
              <div className="row m-3">
                <div className="col-8">
                  <input type="text" className="form-control" placeholder="Today's Plane" value={text} onChange={handlechange} />
                </div>
                <div className="col-2">
                  <button type="text" className="btn btn-warning fw-bold" onClick={handleAdd}>Button</button>
                </div>
              </div>
              <div className="row">
                <ul className="list-unstyled m-4">
                  {
                    todos?.map((value, i) => {
                      return <List key={i} id={i} value={value} removeData={handleRemove}  shareData={handleShare}/>
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Dashboard
