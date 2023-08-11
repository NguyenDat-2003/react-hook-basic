import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../../hook/fetch";
import "./Blog.scss";

function DetailBlog() {
  let { id } = useParams();
  const history = useNavigate();
  const {
    data: dataBlogDetail,
    isLoading,
    isError,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  const handleBack = () => {
    history("/blog");
  };

  return (
    <>
      <button onClick={handleBack}>Back</button>
      <div className="blog-detail">
        {dataBlogDetail && (
          <>
            <div className="title">{dataBlogDetail.title}</div>
            <div className="body">{dataBlogDetail.body}</div>
          </>
        )}
      </div>
    </>
  );
}

export default DetailBlog;
