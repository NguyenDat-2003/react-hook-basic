import { useParams, useNavigate } from "react-router-dom";
function DetailBlog() {
  let { id } = useParams();
  const history = useNavigate();
  const handleBack = () => {
    history("/blog");
  };
  return (
    <>
      <button onClick={handleBack}>Back</button>
      <h1>Hello detail with id = {id}</h1>
    </>
  );
}

export default DetailBlog;
