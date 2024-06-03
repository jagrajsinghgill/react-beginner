import { UserCard } from "./UserCard";

export function UserCards({ users }) {
  return (
    <div className="card-grid">
      {users &&
        users.length > 0 &&
        users.map((item) => <UserCard key={item.id} {...item} />)}
    </div>
  );
}
