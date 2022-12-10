import "./Error.css";

function Error({show}) {
    return(
        <label htmlFor='todoInput' className="error-message" 
        style={
            (!show) 
            ?   {display:"none"}
            :   {display:"flex"}

        }
        
        > <p>Task content can contain max 54 characters.</p> </label>
    )
}

export default Error;