import React, { useState, useEffect } from "react";
import axios from "axios";

const AxiosData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true); // Yükleniyor göstergesi
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
                setData(response.data); // API’den gelen veriyi state’e aktar
            } catch (err) {
                setError(err.message); // Hata mesajını kaydet
            } finally {
                setLoading(false); // İşlem tamamlandığında
            }
        };

        fetchData();
    }, []); // Sadece ilk yüklemede çalışır

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

export default AxiosData;