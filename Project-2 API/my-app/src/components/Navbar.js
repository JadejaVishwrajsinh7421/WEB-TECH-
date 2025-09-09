import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      {/* IMDb Logo */}
      <Link to="/" className="navbar-brand d-flex align-items-center">
        <span
          style={{
            background: "#f5c518",
            color: "black",
            fontWeight: "bold",
            padding: "4px 8px",
            borderRadius: "4px",
            fontSize: "20px",
          }}
        >
          IMDb
        </span>
      </Link>

      {/* Toggle button for mobile */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Navbar links + Search */}
      <div className="collapse navbar-collapse" id="navbarNav">
        {/* Left side menu */}
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/movies">
              Movies
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/tv">
              TV Shows
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/celebrities">
              Celebs
            </Link>
          </li>
        </ul>

        {/* Search bar */}
        <form className="d-flex me-3" style={{ flex: 1, maxWidth: "500px" }}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search IMDb"
            aria-label="Search"
          />
          <button className="btn btn-warning" type="submit">
            Search
          </button>
        </form>

        {/* Right side links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/watchlist">
              Watchlist
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
