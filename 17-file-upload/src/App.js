import React, { useState } from "react";
import "./App.css";

function FileUpload() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");

  const handleFile = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);

    // Preview oluştur
    const url = URL.createObjectURL(uploadedFile);
    setPreview(url);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!file) {
      alert("Lütfen bir dosya seçiniz.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("username", "Enes");

    console.log("Gönderilecek FormData:");
    for (let pair of formData.entries()) {
      console.log(pair[0] + ": ", pair[1]);
    }

    // BURADA backend’e gönderilir
    // fetch("http://localhost:5000/upload", {
    //   method: "POST",
    //   body: formData,
    // });
  };

  return (
    <div className="container">
      <h1>File Upload & FormData</h1>

      <form onSubmit={handleSubmit} className="form-box">
        <input type="file" onChange={handleFile} />

        {preview && <img src={preview} alt="preview" className="preview" />}

        <button className="btn" type="submit">
          Gönder
        </button>
      </form>
    </div>
  );
}

export default FileUpload;