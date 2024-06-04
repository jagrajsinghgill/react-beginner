export function Comment({ email, body }) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="text-sm mb-1">{email}</div>
        {body}
      </div>
    </div>
  );
}
