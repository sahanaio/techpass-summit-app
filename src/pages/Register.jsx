import { useState } from "react";
import { supabase } from "../supabase";

export default function Register() {
  const [eventName, setEventName] = useState("Global AI & ML Summit");
  const [passType, setPassType] = useState("Student");
  const [tickets, setTickets] = useState(1);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Booking pass...");

    const { error } = await supabase.from("event_registrations").insert([
      {
        event_name: eventName,
        pass_type: passType,
        tickets: parseInt(tickets, 10)
      }
    ]);

    if (error) {
      setStatus(`Error: ${error.message}`);
    } else {
      setStatus("Pass registered successfully!");
      setTickets(1);
    }
  };

  return (
    <div className="page-container">
      <h2>Register for an Event</h2>
      <form onSubmit={handleSubmit} className="form-card">
        <label>Select Event:</label>
        <select value={eventName} onChange={(e) => setEventName(e.target.value)}>
          <option value="Global AI & ML Summit">Global AI & ML Summit</option>
          <option value="Full-Stack Web3 Bootcamp">Full-Stack Web3 Bootcamp</option>
          <option value="Cloud Native & DevOps Conference">Cloud Native & DevOps Conference</option>
        </select>

        <label>Pass Type:</label>
        <select value={passType} onChange={(e) => setPassType(e.target.value)}>
          <option value="Student">Student ($10)</option>
          <option value="Professional">Professional ($50)</option>
          <option value="VIP Access">VIP Access ($120)</option>
        </select>

        <label>Number of Tickets:</label>
        <input
          type="number"
          min="1"
          max="5"
          value={tickets}
          onChange={(e) => setTickets(e.target.value)}
          required
        />

        <button type="submit" className="btn btn-primary">Confirm Registration</button>
        {status && <p className="status-msg">{status}</p>}
      </form>
    </div>
  );
}