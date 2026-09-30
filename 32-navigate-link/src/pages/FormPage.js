import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormPage = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name.trim() === ""){
      alert("Please enter your name!");
      return;
    }
    // Form submit sonrası yönlendirme
    navigate("/success", { state: { name } });
  };

  return (
    <div className="container">
      <h1>Form Page</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Enter your name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
};

export default FormPage;