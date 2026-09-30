import React, { useState } from 'react';

function ControlledForm() {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Girilen İsim: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        İsim:
        <input type="text" value={name}
          onChange={(e) => setName(e.target.value)}></input>
      </label>
      <button type="submit">Gönder</button>
    </form>
  );
}

export default ControlledForm;