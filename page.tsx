import UsersList from "./components/users-list";

export default async function Home() {
  const getUsersResult = await fetch("http://localhost:3000/api/user");
  const users = await getUsersResult.json();

  return (
    <div>
      <UsersList users={users} />
    </div>
  );
}
