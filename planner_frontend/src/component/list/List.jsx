
function List(props) {
  return (
    <div className="row">
        <li className="shadow p-2 my-2 col-sm-9">{props.value}</li>
        <button className="btn btn-danger my-2 col-sm-1 mx-auto" onClick={() => props.sendData(props.id)}>X</button>
    </div>
  )
}

export default List
