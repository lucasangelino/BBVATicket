export default async function getLastTickets() {
  const res = await fetch("http://localhost:8080/ultimos");
  const data = await res.json();
  return data.tickets;
}
