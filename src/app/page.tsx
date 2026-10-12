export default function Home() {
  const bookings = [
    { id: "BK-1001", route: "Udupi → Mangalore", status: "In Transit" },
    { id: "BK-1002", route: "Mangalore → Bangalore", status: "Pending" },
    { id: "BK-1003", route: "Udupi → Hubli", status: "Delivered" },
  ];
  return (
    <main style={{ padding: "32px", fontFamily: "Arial" }}>
      <h1>Bookings Management</h1>
      <p>Bookings micro-frontend</p>
      <p>Testing</p>

      {bookings.map((booking) => (
        <article
          key={booking.id}
          style={{
            padding: "16px",
            marginBottom: "12px",
            border: "1px solid #ddd",
            borderRadius: "8px",
          }}
        >
          <h3>{booking.id}</h3>
          <p>{booking.route}</p>
          <p>Status: {booking.status}</p>
        </article>
      ))}
    </main>
  );
}
