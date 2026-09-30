import React, { useState, useEffect } from "react";

const DataFetch = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true); // Yükleniyor göstergesi
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");
                if (!response.ok) {
                    throw new Error("Veri çekilirken bir hata oluştu!");
                }
                const result = await response.json();
                setData(result); // Veriyi kaydet
            } catch (err) {
                setError(err.message); // Hata mesajını al
            } finally {
                setLoading(false); // İşlem tamamlandı
            }
        };

        fetchData();
    }, []); // [] yalnızca bir kez çağrılması için

    if (loading) return <p>Yükleniyor...</p>;
    if (error) return <p>Hata: {error}</p>;

    return (
        <div>
            <h1>API Verileri:</h1>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default DataFetch;