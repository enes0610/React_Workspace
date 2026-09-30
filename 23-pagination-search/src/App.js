import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 10;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  // Arama filtresi
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination Hesaplaması
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = filteredPosts.slice(firstPostIndex, lastPostIndex);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const pageNumbers = [...Array(totalPages).keys()].map((num) => num + 1);

  return (
    <div className="container">
      <h1>Pagination & Search</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Arama yap..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1); // Aramada sayfa reset
        }}
        className="search-input"
      />

      {/* Post Listesi */}
      <ul className="list">
        {currentPosts.map((post) => (
          <li key={post.id} className="list-item">
            <strong>{post.id}. </strong>
            {post.title}
          </li>
        ))}
      </ul>

      {/* Pagination Buttons */}
      <div className="pagination">
        {pageNumbers.map((num) => (
          <button
            key={num}
            className={`page-btn ${currentPage === num ? "active" : ""}`}
            onClick={() => setCurrentPage(num)}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;