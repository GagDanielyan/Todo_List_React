function Completed({completed, todos}) {

    return (
        <div className="compCheckDiv"
            style={
                (todos.length > 0)
                ? {display: "flex"}
                : {display: "none"}
            }
        >
            <input type='checkbox' className="compCheck" onChange={completed}/>
            <label> <strong>Hide completed</strong> </label>
        </div>
    )
} 

export default Completed;