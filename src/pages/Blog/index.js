import { Link } from "react-router-dom";
import useFetch from "../../hook/fetch";
import "./Blog.scss";
function Blog() {
  const {
    data: dataBlog,
    isLoading,
    isError,
  } = useFetch("https://jsonplaceholder.typicode.com/posts");

  let newDataBlog = [];
  if (dataBlog && dataBlog.length > 0) {
    newDataBlog = dataBlog.slice(0, 9);
  }

  return (
    <>
      <div>
        <Link to="/blog/new-blog" className="btn-addNew">
          Add new blog
        </Link>
      </div>
      <div className="blog-container">
        {newDataBlog &&
          newDataBlog.length > 0 &&
          newDataBlog.map((item) => {
            return (
              <div key={item.id} className="blog">
                <div className="title">{item.title}</div>
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
