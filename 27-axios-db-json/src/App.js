import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [error, setError] = useState(null);

  const baseUrl = "http://localhost:3001/posts";

  // Verileri Çek
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(baseUrl);
        setPosts(response.data);
      } catch (err) {
        setError("Veri alınamadı.");
      }
    };

    fetchPosts();
  }, []);

  // Yeni Post Ekle
  const addPost = async () => {
    if (newTitle.trim() === "") return;

    try {
      const response = await axios.post(baseUrl, { title: newTitle });
      setPosts([...posts, response.data]);
      setNewTitle("");
    } catch (err) {
      setError("Post eklenemedi.");
    }
  };

  // Post Sil
  const deletePost = async (id) => {
    try {
      await axios.delete(`${baseUrl}/${id}`);
      setPosts(posts.filter((post) => post.id !== id));
    } catch (err) {
      setError("Silme işlemi başarısız.");
    }
  };

  return (
    <div className="container">
      <h1>Postlar</h1>

      <div className="input-group">
        <input
          type="text"
          placeholder="Yeni başlık"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <button onClick={addPost}>Ekle</button>
      </div>

      {error && <p className="error">{error}</p>}

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title}
            <button onClick={() => deletePost(post.id)}>Sil</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;