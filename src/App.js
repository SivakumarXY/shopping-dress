import { BrowserRouter, Route, Routes } from "react-router-dom";
import Update from "./Components/Update";
import Add from "./Components/Add";
import Books from "./Components/Books";

import "./style.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
