const route = "/api/todos";

export async function findTodos() {
  const headers: HeadersInit = new Headers();
  const response = await fetch(route, {
    method: "GET",
    headers,
  });

  return response.json();
}