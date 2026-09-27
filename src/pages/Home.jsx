import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="page-container home-page">
      <h1>TechPass Summit 2026</h1>
      <p>Reserve your passes for global developer workshops, hackathons, and AI symposiums.</p>
      <div className="action-buttons">
        <Link to="/events" className="btn btn-primary">Browse Events</Link>
        <Link to="/register" className="btn btn-secondary">Get Pass</Link>
      </div>
    </div>
  );
}