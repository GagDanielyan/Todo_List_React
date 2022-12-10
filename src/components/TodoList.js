import TodoItem from "./TodoItem";

function TodoList({todos, count, change, toggleModal, removeTodo}) {
    // for completed or not completed todos
    const notCompleted = () => {
        const filteredTodos = todos.filter((todo) => !todo.isCompleted)
        return filteredTodos;
    }

    return (
        <div className="todoList">
            { !count ?
                 todos.map((todo) => {
                    return (
                        <TodoItem 
                        key={todo.id} 
                        todo={todo}
                        change={change}
                        toggleModal={toggleModal}
                        removeTodo={removeTodo}
                        />
                    ) 
                }) :
                notCompleted().map((todo) => {
                    return (
                        <TodoItem 
                        key={todo.id} 
                        todo={todo}
                        change={change}
                        toggleModal={toggleModal}
                        removeTodo={removeTodo}
                        />
                    )
                })
               
            }
        </div>
    )
}

export default TodoList;

