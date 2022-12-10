function TodoItem({ todo, change, toggleModal, removeTodo }) {
    return (
        <div className="todoItem" style={
            todo.isCompleted
              ? {backgroundColor: '#F6F6F6'}
              : {backgroundColor: '#fff'}
          }>
            <label className="todoItemWrapper">
                <input type='checkbox' checked={todo.isCompleted} className="todoItemCheck" onChange={() => {
                    change(todo);
                }} />

                <div className="todo_text">
                    <p>{todo.text}</p>
                </div>

                <a href='#' onClick={() => {
                    toggleModal();
                    removeTodo(todo);
                }} className="todoItemButton"> <img src="./imagrs/Vector (3).png" /></a>
            </label>
        </div>
    )
}

export default TodoItem;