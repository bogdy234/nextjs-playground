import { NextRequest } from "next/server";

let users = [
  {
    id: 1,
    name: "Bogdy",
  },
  {
    id: 2,
    name: "Ella",
  },
  {
    id: 3,
    name: "Test1",
  },
  {
    id: 4,
    name: "Test2",
  },
  {
    id: 5,
    name: "Test3",
  },
  {
    id: 6,
    name: "Test4",
  },
];

export function GET() {
  return Response.json(users);
}

export async function DELETE(req: NextRequest) {
  const body = (await req.json()) as { id: number };
  if (!body.id) {
    return Response.json({ error: "No id provided" }, { status: 400 });
  }

  users = users.filter((user) => user.id !== body.id);

  return Response.json(body.id);
}
