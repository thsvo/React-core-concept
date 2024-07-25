import { useEffect, useState } from "react";

export default function Users () {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) =>setUsers(data));
  }, []);

  return <div>Users: {users.length} </div>;
}
