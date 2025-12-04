import useAPI from "../hooks/useAPI";
import UserCard from "./UserCard";

const UserList = () => {
  const { data, loading, error } = useAPI("https://jsonplaceholder.typicode.com/users");

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>Error loading users</h3>;

  return (
    <div>
      <h2>User List</h2>
      {data.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
