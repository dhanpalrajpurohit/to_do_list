
function List(props) {
  return (
    <div className="row">
        <li className="shadow p-3 m-1 col-sm-6">{props.value}</li>
        <button className="btn btn-danger col-sm-1 mx-auto" onClick={() => props.removeData(props.id)}>X</button>
        <button type="text" className="btn btn-warning col-sm-1 fw-bold" onClick={() => props.shareData(props.value)}>Share</button>
    </div>
  )
}

export default List
