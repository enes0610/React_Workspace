import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then((res) => {
        if (!res.ok) throw new Error("Veri alınamadı.");
        return res.json();
      })
      .then((data) => setPosts(data))
      .catch((err) => setError(err.message));
  }, []);

  const addPost = async () => {
    if (newTitle.trim() === "") return;

    const response = await fetch("http://localhost:3001/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newTitle }),
    });

    const data = await response.json();
    setPosts([...posts, data]);
    setNewTitle("");
  };

  const deletePost = async (id) => {
    await fetch(`http://localhost:3001/posts/${id}`, {
      method: "DELETE",
    });

    setPosts(posts.filter((post) => post.id !== id));
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