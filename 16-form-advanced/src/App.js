import React, { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Ad zorunludur.";
    if (!form.email.includes("@")) newErrors.email = "Geçerli bir email giriniz.";
    if (form.password.length < 6)
      newErrors.password = "Şifre en az 6 karakter olmalıdır.";
    if (!form.age || form.age < 18)
      newErrors.age = "Yaş en az 18 olmalıdır.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmittedData(form);
    }
  };

  return (
    <div className="container">
      <h1>Gelişmiş Form Yönetimi</h1>

      <form onSubmit={handleSubmit} className="form-box">
        <div className="form-group">
          <label>Ad</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label>E-mail</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label>Şifre</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <div className="form-group">
          <label>Yaş</label>
          <input
            type="number"
            name="age"
            value={form.age}
            onChange={handleChange}
          />
          {errors.age && <p className="error">{errors.age}</p>}
        </div>

        <button className="btn" type="submit">
          Gönder
        </button>
      </form>

      {submittedData && (
        <div className="result">
          <h2>Gönderilen Form Verileri</h2>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;