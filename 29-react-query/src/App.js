/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export default function App() {
  const [page, setPage] = useState(1);
  const [title, setTitle] = useState("");
  const queryClient = useQueryClient();

  // 📌 Tüm postları tek seferde çek (100 adet)
  const fetchAllPosts = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return res.data; // 100 kayıt
  };

  const { data: basePosts = [], isLoading, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchAllPosts,
    staleTime: 1000 * 60, // bir süre taze tut
  });

  // 📌 Lokal eklenen postları ayrı tut
  const [localPosts, setLocalPosts] = useState([]);

  // 📌 POST – Mutation
  const mutation = useMutation({
    mutationFn: async (newPost) => {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        newPost
      );
      return res.data; // jsonplaceholder genelde id: 101 döndürür
    },
    onSuccess: (newPostFromApi) => {
      // Mevcut en büyük id'yi bul (hem base hem lokal)
      const maxIdBase = basePosts.length ? Math.max(...basePosts.map((p) => p.id)) : 0;
      const maxIdLocal = localPosts.length ? Math.max(...localPosts.map((p) => p.id)) : 0;
      const maxId = Math.max(maxIdBase, maxIdLocal, 0);

      // Benzersiz id ver: 101, 102, 103...
      const postWithId = { ...newPostFromApi, id: maxId + 1 };

      // Lokal listeye ekle
      setLocalPosts((prev) => [...prev, postWithId]);
    },
  });

  const handleAddPost = () => {
    if (!title.trim()) return;

    mutation.mutate({
      title,
      body: "test body",
      userId: 1,
    });

    setTitle("");
  };

  if (isLoading) return <p className="loading">Loading...</p>;
  if (isError) return <p className="error">Bir hata oluştu: {error?.message}</p>;

  // 📌 Birleştirilmiş liste: 100 API postu + lokal eklenenler
  const combinedPosts = [...basePosts, ...localPosts];

  // 📌 Toplam sayfa: her sayfada 10 kayıt
  const pageSize = 10;
  const totalPages = Math.max(1, Math.ceil(combinedPosts.length / pageSize));

  // 📌 Geçerli sayfanın dilimi
  const start = (page - 1) * pageSize;
  const end = page * pageSize;
  const paginatedPosts = combinedPosts.slice(start, end);

  return (
    <div className="container">
      <h1>React Query – Lokal Pagination & Mutations</h1>

      {/* Yeni Post Ekleme */}
      <div className="add-box">
        <input
          type="text"
          placeholder="Yeni başlık..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          aria-label="Yeni başlık gir"
        />
        <button onClick={handleAddPost}>Ekle</button>
      </div>

      {/* Liste */}
      <ul className="list">
        {paginatedPosts.map((post) => (
          <li key={post.id} className="list-item">
            <strong>{post.id}. </strong> {post.title}
          </li>
        ))}
      </ul>

      {/* Pagination */}
      <div className="pagination">
        <button
          className="page-btn"
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
        >
          ◀
        </button>

        <span className="page-number">Sayfa: {page} / {totalPages}</span>

        <button
          className="page-btn"
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
        >
          ▶
        </button>
      </div>
    </div>
  );
}