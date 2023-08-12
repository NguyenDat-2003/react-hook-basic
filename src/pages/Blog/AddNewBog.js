import { useState } from "react";
import "./Blog.scss";

function AddNewBog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="add-new-container">
      <div className="form-item">
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-item">
        <label>Content:</label>
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button className="btn-addNew" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}

export default AddNewBog;
