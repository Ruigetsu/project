import { useState } from 'react';

function TodoForm ({setTodos}) {
    const [value, setValue] = useState('')
    const handleClick = (e) => {
        e.preventDefault();
        setTodos(todos=>[...todos,value]);
    }
    return (
        <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          value={value}
          onChange={event=>setValue(event.target.value)}
        />
        <button type="submit" className="btn btn__primary btn__lg" onClick={handleClick}>
          Add
        </button>
      </form>
    )
}

export default  TodoForm; 