import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

import useFetch from "../../hook/fetch";
import "./Blog.scss";
import AddNewBog from "./AddNewBog";

function Blog() {
  /////////////////////////React Bootstrap
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  ///////////////////////
  const [newDataBlog, setNewDataBlog] = useState([]);

  const {
    data: dataBlog,
    isLoading,
    isError,
  } = useFetch("https://jsonplaceholder.typicode.com/posts");

  useEffect(() => {
    if (dataBlog && dataBlog.length > 0) {
      let data = dataBlog.slice(0, 9);
      setNewDataBlog(data);
    }
  }, [dataBlog]);

  const handleAddNew = (blog) => {
    setShow(false);
    setNewDataBlog((prev) => [blog, ...prev]);
  };

  const handleDeleteBlog = (id) => {
    let data = newDataBlog.filter((item) => item.id !== id);
    setNewDataBlog([...data]);
  };

  return (
    <>
      <Button variant="primary my-3" onClick={handleShow}>
        Add New Blog
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddNewBog handleAddNew={handleAddNew} />
        </Modal.Body>
      </Modal>

      <div className="blog-container">
        {newDataBlog &&
          newDataBlog.length > 0 &&
          newDataBlog.map((item) => {
            return (
              <div key={item.id} className="blog">
                <div className="title">
                  <span>{item.title}</span>
                  <span onClick={() => handleDeleteBlog(item.id)}>X</span>
                </div>
                <div className="body">{item.body}</div>
                <button>
                  <Link to={`/blog/${item.id}`}>View detail</Link>
                </button>
              </div>
            );
          })}

        {isLoading === true && (
          <div style={{ textAlign: "center !important", width: "100%" }}>
            Loading...
          </div>
        )}
      </div>
    </>
  );
}

export default Blog;
