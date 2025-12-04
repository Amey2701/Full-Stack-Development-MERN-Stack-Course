const UserCard = ({ user }) => {
  return (
    <div style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <h4>{user.name}</h4>
      <p>{user.email}</p>
    </div>
  );
};

export default UserCard;
