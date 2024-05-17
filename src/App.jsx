import { useEffect, useState } from "react";
import { UserCard } from "./components/UserCard";


function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const responseJson = await response.json();

      const usersImages = responseJson.map(user => ({
        ...user,
        image: `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 999)}`
      }));
      setUsers(usersImages);

    };

    getData();
  }, []);

  return (
    <>
      <div className="container">
        {users.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            username={user.username}
            email={user.email}
            image={user.image}
          />
        ))}
      </div>
    </>
  )
}

export default App
