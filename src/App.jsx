import "./assets/user.css";
import user from "./data/user.json";
import { UserCard } from "./components/UserCard/UserCard";
import { UserCardClass } from "./components/UserCardClass/UserCardClass";

function App() {

  return (
    <div>
      <h1>Function Component</h1>
      <UserCard userData={user}/>
      <br />
      <h1>Class Component</h1>
      <UserCardClass name={user?.name} age={user?.age} phone={user?.phoneNumber} address={user?.address}/>
    </div>
  )
}

export default App
