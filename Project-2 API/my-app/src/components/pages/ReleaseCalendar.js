function ReleaseCalendar() {
  // 🔹 Dummy Data
  const releases = [
    {
      id: 1,
      title: "Deadpool & Wolverine",
      date: "Sep 05, 2025",
      image:
        "https://m.media-amazon.com/images/M/MV5BMzU1MDAzNTA3Ml5BMl5BanBnXkFtZTgwNjM3NjkzMjE@._V1_.jpg",
    },
    {
      id: 2,
      title: "Spider-Man: Beyond the Spider-Verse",
      date: "Sep 07, 2025",
      image:
        "https://m.media-amazon.com/images/M/MV5BZDlkYTI0NDQtNzRlYy00NzJlLWJlYjYtNjY1NjdiMGM2OTc3XkEyXkFqcGc@._V1_.jpg",
    },
    {
      id: 3,
      title: "Avengers: Secret Wars",
      date: "Sep 12, 2025",
      image:
        "https://m.media-amazon.com/images/M/MV5BZTc0OTkxZmUtOTUwNy00Nzk3LThlNDItMzAwYmY0YjIxZTJmXkEyXkFqcGc@._V1_.jpg",
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4">
        Upcoming releases <span className="text-primary">United States ⌄</span>
      </h2>

      {/* Tabs (Movies, TV, Episodes) */}
      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <button className="nav-link active">Movies</button>
        </li>
        <li className="nav-item">
          <button className="nav-link">TV</button>
        </li>
        <li className="nav-item">
          <button className="nav-link">TV Episodes</button>
        </li>
      </ul>

      {/* Release List */}
      {releases.map((movie) => (
        <div
          key={movie.id}
          className="d-flex align-items-center justify-content-between border-bottom py-3"
        >
          {/* Image + Title */}
          <div className="d-flex align-items-center">
            <img
              src={movie.image}
              alt={movie.title}
              className="rounded me-3"
              style={{ width: "60px", height: "80px", objectFit: "cover" }}
            />
            <div>
              <h6 className="mb-1 fw-bold">{movie.title}</h6>
              <p className="mb-0 text-muted">{movie.date}</p>
            </div>
          </div>

          {/* Watchlist Icon */}
          <button className="btn btn-outline-dark">
            <i className="bi bi-bookmark-plus"></i>
          </button>
        </div>
      ))}
    </div>
  );
}

export default ReleaseCalendar;
