import React, { useRef } from 'react';

function UncontrolledForm() {
  const nameInputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Girilen İsim: ${nameInputRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        İsim:
        <input type="text" ref={nameInputRef}></input>
      </label>
      <button type="submit">Gönder</button>
    </form>
  );
}

export default UncontrolledForm;