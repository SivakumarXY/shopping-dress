import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });

  const navigate = useNavigate();

  const handleChange = (evt) => {
    setBook((prev) => ({
      ...prev,
      [evt.target.name]: evt.target.value,
    }));
  };

  const handleClick = async (evt) => {
    evt.preventDefault();
    try {
      await axios.post("http://localhost:5000/books", book);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(book);

  return (
    <div className="form">
      <h1>Add new Book</h1>

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

      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default Add;
