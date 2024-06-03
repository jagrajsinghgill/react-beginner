import { Link } from "react-router-dom";

export function PostCard({ id, title, body }) {
  return (
    <div className="card">
      <div className="card-header">{title}</div>
      <div className="card-body">
        <div className="card-preview-text">{body}</div>
      </div>
      <div className="card-footer">
        <Link to={`/post/${id.toString()}`} className="btn">
          View
        </Link>
      </div>
    </div>
  );
}
