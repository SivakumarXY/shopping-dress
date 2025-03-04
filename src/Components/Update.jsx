import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


const Update = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });

  const navigate = useNavigate();
  const location = useLocation();

  const bookId = location.pathname.split("/")[2];

  console.log(bookId);

  const handleChange = (evt) => {
    setBook((prev) => ({
      ...prev,
      [evt.target.name]: evt.target.value,
    }));
  };

  const handleClick = async (evt) => {
    evt.preventDefault();
    try {
      await axios.put("http://localhost:5000/books/" + bookId, book);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(book);

  return (
    <div className="form">
      <h1>Update new Book</h1>

      <input
        type="text"
        placeholder="title"
        onChange={handleChange}
        name="title"
      />
      <input
        type="text"
        placeholder="desc"
        onChange={handleChange}
        name="desc"
      />
      <input
        type="number"
        placeholder="price"
        onChange={handleChange}
        name="price"
      />
      <input
        type="text"
        placeholder="cover"
        onChange={handleChange}
        name="cover"
      />

      <button onClick={handleClick}>
       Update
      </button>
    </div>
  );
};

export default Update;
