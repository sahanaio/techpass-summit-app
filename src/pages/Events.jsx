export default function Events() {
  const eventsList = [
    { id: 1, name: "Global AI & ML Summit", date: "Oct 12, 2026", track: "Artificial Intelligence" },
    { id: 2, name: "Full-Stack Web3 Bootcamp", date: "Oct 18, 2026", track: "Web Development" },
    { id: 3, name: "Cloud Native & DevOps Conference", date: "Nov 02, 2026", track: "Cloud Architecture" }
  ];

  return (
    <div className="page-container">
      <h2>Featured Tech Events</h2>
      <div className="card-grid">
        {eventsList.map((event) => (
          <div key={event.id} className="card">
            <h3>{event.name}</h3>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Track:</strong> {event.track}</p>
          </div>
        ))}
      </div>
    </div>
  );
}