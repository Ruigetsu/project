import { useState } from 'react';

function TodoItem ({todo, index, setTodos}) {
    const handleClick = (e) => {
        e.preventDefault();
        setTodos(todos=>todos.filter((_, i) => i!==index))
    }
    const [isEditing, setIsEditing] = useState("");
    const [editedText, setEditedText] = useState(todo);
    const handleEdit = (e) => {
        e.preventDefault();
        setTodos(todos => todos.map((t, i) => {
            if (i === index) {
                return editedText;
            }
            return t;
        }))
        setIsEditing(false);
    }
    const handleChange = (e) => {
        setEditedText(e.target.value);
    }

    return (
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-0" type="checkbox" defaultChecked />
            {!isEditing ? (
              <label className="todo-label" htmlFor="todo-0">
                {todo}
              </label>
            ) : (
              <input type="text" value={editedText} onChange={handleChange} />
            )}
          </div>
          <div className="btn-group">
            <button type="button" className="btn" onClick={() => setIsEditing(!isEditing)}>
              Edit <span className="visually-hidden">{todo}</span>
            </button>
            <button type="button" className="btn btn__danger" onClick={handleClick}>
              Delete <span className="visually-hidden">{todo}</span>
            </button>
            {isEditing && <button type="button" className="btn btn__primary" onClick={handleEdit}>Save</button>}
          </div>
        </li>
    )
}

export default TodoItem