"use client";

import { handleDelete } from "../server-actions/handleDelete";

export default function UsersList({
  users,
}: {
  users: Array<{
    id: number;
    name: string;
  }>;
}) {
  return users.map((user: { id: number; name: string }) => (
    <div key={user.id}>
      <div>{user.name}</div>
      <button onClick={() => handleDelete(user.id)}>DELETE</button>
    </div>
  ));
}
