import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:5000/books");
        setBooks(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:5000/books/" + id);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Sivakumar Book Shop</h1>

      <div className="books">
        {books.map((book) => {
          return (
            <div className="book" key={book.id}>
              {book.cover && <img src={book.id} alt="" />}

              <h2>{book.title}</h2>
              <p>{book.desc}</p>
              <span>{book.price}</span>
              <div>
                <button
                  onClick={() => {
                    handleDelete(book.id);
                  }}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>

                <button>
                  <Link to={`/update/${book.id}`}>
                    {" "}
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </Link>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <button>
        <Link to="/add">Add new Book</Link>
      </button>
    </div>
  );
};

export default Books;
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Books = () => {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     const fetchAllBooks = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/books");
//         setBooks(res.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchAllBooks();
//   }, []);

//   return (
//     <div>
//       <h1>Sivakumar Book Shop</h1>

//       <div className="books">
//         {books.map((book) => {
//           // Add return to make the JSX render properly
//           return (
//             <div className="book" key={book.id}>
//               {book.cover && <img src={book.cover} alt={book.title} />}
//               <h2>{book.title}</h2>
//               <p>{book.desc}</p>
//               <span>{book.price}</span>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Books;
