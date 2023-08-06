const TodoReducer = (state = { todos: [] }, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return { todos: action.payload };

        case "REMOVE_TODO":
            return { todo: action.payload };

        default:
            return state;
    }
}

export default TodoReducer;