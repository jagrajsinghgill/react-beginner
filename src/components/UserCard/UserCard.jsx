export function UserCard({userData}) {

  return (
    <>
      <div className="card">
        <h2 className="name">{userData?.name}</h2>
        <div className="body">
          <div className="label">Age:</div>
          <div>{userData?.age}</div>
          <div className="label">Phone:</div>
          <div>{userData?.phoneNumber}</div>
          <div className="label">Address:</div>
          <div>{userData?.address}</div>
        </div>
      </div>
    </>
  )
}