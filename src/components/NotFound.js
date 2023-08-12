import { useNavigate } from "react-router-dom";

function NotFound() {
  let history = useNavigate();

  const handleBack = () => {
    history("/blog");
  };

  return (
    <div className="not-found-container">
      <h4>This Page isn't Available</h4>
      <h5>
        Lỗi này thường do chủ sở hữu chỉ chia sẻ nội dung với một nhóm nhỏ, thay
        đổi người được xem hoặc đã xóa nội dung.
      </h5>
      <button className="btn btn-danger" onClick={handleBack}>
        Go to home page
      </button>
    </div>
  );
}

export default NotFound;
