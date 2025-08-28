"use server";

import { revalidatePath } from "next/cache";

export async function handleDelete(id: number) {
  const response = await fetch("http://localhost:3000/api/user", {
    method: "DELETE",
    body: JSON.stringify({ id }),
  });
  const jsonResponse = await response.json();
  console.log(jsonResponse);
  revalidatePath("/api/user");
  return jsonResponse;
}
