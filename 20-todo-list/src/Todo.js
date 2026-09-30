import React, { useState } from "react";

function Todo({ task, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    editTask(task.id, newText);
    setIsEditing(false);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {isEditing ? (
        <input type="text" className="form-control me-2" value={newText}
          onChange={(e) => setNewText(e.target.value)}></input>
      ) : (
        <span>{task.text}</span>
      )}
      <div>
        {isEditing ? (
          <button className="btn btn-success me-2" onClick={handleEdit}>
            Kaydet
          </button>
        ) : (
          <button className="btn btn-warning me-2" onClick={() => setIsEditing(true)}>
            Düzenle
          </button>
        )}
        <button className="btn btn-danger" onClick={() => deleteTask(task.id)}>
          Sil
        </button>
      </div>
    </li>
  );
}

export default Todo;