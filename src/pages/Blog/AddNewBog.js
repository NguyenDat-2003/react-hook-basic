import { useState } from "react";
import axios from "axios";
import "./Blog.scss";

function AddNewBog({ handleAddNew }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) {
      alert("empty title");
      return;
    }
    if (!content) {
      alert("empty content");
      return;
    }

    let data = {
      title: title,
      body: content,
      userId: 1,
    };
    let res = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      data
    );
    if (res && res.data) {
      let newBlog = res.data;
      handleAddNew(newBlog);
    }
  };

  return (
    <form className="add-new-container" onSubmit={handleSubmit}>
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
      <button className="btn-addNew" type="submit">
        Submit
      </button>
    </form>
  );
}

export default AddNewBog;
