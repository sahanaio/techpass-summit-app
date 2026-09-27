import { useEffect, useState } from "react";
import { supabase } from "../supabase";

export default function MyRegistrations() {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRegistrations();
  }, []);

  const fetchRegistrations = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("event_registrations")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setRegistrations(data);
    }
    setLoading(false);
  };

  return (
    <div className="page-container">
      <h2>My Registered Event Passes</h2>
      {loading ? (
        <p>Loading passes...</p>
      ) : registrations.length === 0 ? (
        <p>No registered passes found.</p>
      ) : (
        <div className="card-grid">
          {registrations.map((item) => (
            <div key={item.id} className="card">
              <h3>{item.event_name}</h3>
              <p><strong>Pass Type:</strong> {item.pass_type}</p>
              <p><strong>Tickets:</strong> {item.tickets}</p>
              <p><strong>Booked On:</strong> {new Date(item.created_at).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}