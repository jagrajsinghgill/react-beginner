import { useLoaderData } from "react-router-dom";

export function User() {
  const { name, company, email, website, address } = useLoaderData();
  return (
    <>
      <h1 className="page-title">{name}</h1>
      <div className="page-subtitle">{email}</div>
      <div>
        <b>Company:</b> {company?.name}
      </div>
      <div>
        <b>Website:</b> {website}
      </div>
      <div>
        <b>Address:</b> {address?.street} {address?.suite}, {address?.city},{" "}
        {address?.zipcode}
      </div>
    </>
  );
}
