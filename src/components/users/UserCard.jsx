import { Link } from "react-router-dom";

export function UserCard({ id, name, company, email, website }) {
  return (
    <div className="card">
      <div className="card-header">{name}</div>
      <div className="card-body">
        <div>{company?.name}</div>
        <div>{email}</div>
        <div>{website}</div>
      </div>
      <div className="card-footer">
        <Link to={`/user/${id.toString()}`} className="btn">
          View
        </Link>
      </div>
    </div>
  );
}
