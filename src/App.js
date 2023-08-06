import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodoAction, RemoveTodoAction } from './actions/TodoActions';

function App() {
  const [todo, setTodo] = useState()
  const dispatch = useDispatch();
  const Todo = useSelector((state) => state.Todo);
  const { todos } = Todo;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todo));

  };

  const removeHandler = (t) => {
    dispatch(RemoveTodoAction(t));
  }

  return (
    <div className='Apps'>
      <header className='App-header'>
        <h2>Task Todo</h2>
        <form onSubmit={handleSubmit}>
          <input className='input' placeholder='Enter data'
            onChange={(e) => setTodo(e.target.value)} required />
          <button className='addbutton' type='submit' >Add Tasks</button>
        </form>
        <ul className='tasks'>
          {
            todos && todos.map((t) => (
              <li key={t.id} className='listItem'>
                <span>{t.todo}</span>
                <button className='delete' onClick={() => removeHandler(t)}>&times;</button>
              </li>
            )
            )
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
