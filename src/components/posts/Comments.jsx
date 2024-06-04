import { Comment } from "./Comment";

export function Comments({ list }) {
  return (
    <>
      {list && list.length > 0 ? (
        <>
          <h3 className="mt-4 mb-2">Comments</h3>
          <div className="card-stack">
            {list.map((comment) => (
              <Comment key={comment.id} {...comment} />
            ))}
          </div>
        </>
      ) : (
        <h3 className="mt-4 mb-2">No comments</h3>
      )}
    </>
  );
}
