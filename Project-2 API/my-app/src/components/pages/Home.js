import { Link } from "react-router-dom";

function Home() {
  // 🔹 Movie Data
  const fanFavorites = [
    {
      id: 1,
      title: "Lokah Chapter One: Chandra",
      rating: 8.2,
      image:
        "https://images.indianexpress.com/2025/08/Lokah-Chapter-1-Chandra-Movie-Review-and-Rating-Kalyani-Priyadarshan-Naslen-2.jpg",
    },
    {
      id: 2,
      title: "Vadakkupatti Ramasamy",
      rating: 7.4,
      image:
        "https://static.toiimg.com/thumb/97272633.cms?width=170&height=240&imgsize=17702",
    },
    {
      id: 3,
      title: "Mahavatar Narsimha",
      rating: 9.1,
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Mahavatar_Narsimha_soundtrack.jpg/250px-Mahavatar_Narsimha_soundtrack.jpg",
    },
    {
      id: 4,
      title: "F1",
      rating: 7.8,
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTQ2Nx_8NdsCMpxJWX4-HvMkGcfCUAe20INzWi5KzedTZR0gt_KLDhvpYRVZcuph23dHZUmaw",
    },
    {
      id: 5,
      title: "Maareesan",
      rating: 7.5,
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQYBQSpNCP7pQwE8BSgMi3M2QAY1zIbiNTDLJVILZOkzbPr-iJbCTyWGyMeP2jnqrBIssgY",
    },
    {
      id: 6,
      title: "Superman",
      rating: 7.3,
      image:
        "https://m.media-amazon.com/images/M/MV5BNjM2YjZmYzUtNGIzYi00ZmI0LWFmZDItYWMwNmViYTRlNTRhXkEyXkFqcGc@._V1_.jpg",
    },
  ];

  const topRated = [
    {
      id: 7,
      title: "The Shawshank Redemption",
      rating: 9.3,
      image: "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg",
    },
    {
      id: 8,
      title: "The Godfather",
      rating: 9.2,
      image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQAY2xsJVIZxm3K0gNtOMr9CSCvLdr5kdo3V3pv2HMuUkTBhFzRe5-b8NDRmO1mt5S5Xp_YyQ",
    },
    {
      id: 9,
      title: "The Dark Knight",
      rating: 9.0,
      image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTfE_qrYMBZ_JB8om-34WGaZARhpX26yWRttqIDvn4_7l--UzX8mxKcPrc59IcvTpEA_G8gPA",
    },
    {
      id: 10,
      title: "12 Angry Men",
      rating: 9.0,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAJZnplMwjCtHf_SAhxWLTDEoVWunMNp53CemNoORRZQtxI-3tYSUYk1hLb_jBwgvxFXMQ",
    },
  ];

  return (
    <div className="bg-dark text-light">
      {/* 🔹 Hero Banner */}
      <div
        className="hero-banner position-relative mb-5"
        style={{
          height: "400px",
          backgroundImage:
            "url('https://images.indianexpress.com/2023/05/nolan-movie.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-dark bg-opacity-50 h-100 d-flex flex-column justify-content-center ps-5">
          <h1 className="text-warning">Welcome to IMDb Clone</h1>
          <p className="fs-5">Discover Trending Movies & TV Shows</p>
          <button className="btn btn-warning btn-lg">Explore Now</button>
        </div>
      </div>

      {/* 🔹 Fan Favorites */}
      <div className="container mb-5">
        <h3 className="text-warning mb-3">Fan Favorites</h3>
        <p>This week's top TV and movies</p>
        <div className="row">
          {fanFavorites.map((m) => (
            <div className="col-md-2 col-6 mb-4" key={m.id}>
              <div className="card bg-dark text-light h-100 border-0">
                <img
                  src={m.image}
                  className="card-img-top"
                  alt={m.title}
                  style={{ height: "280px", objectFit: "cover" }}
                />
                <div className="card-body p-2">
                  <h6 className="text-truncate">{m.title}</h6>
                  <p className="mb-1">
                    ⭐ <span className="text-warning">{m.rating}</span>
                  </p>
                  <button className="btn btn-outline-light btn-sm w-100 mb-1">
                    Watch options
                  </button>
                  <button className="btn btn-outline-warning btn-sm w-100">
                    ▶ Trailer
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 Top Rated Movies */}
      <div className="container mb-5">
        <h3 className="text-warning mb-3">Top Rated Movies</h3>
        <div className="row">
          {topRated.map((m) => (
            <div className="col-md-3 col-6 mb-4" key={m.id}>
              <div className="card bg-dark text-light h-100 border-0">
                <img
                  src={m.image}
                  className="card-img-top"
                  alt={m.title}
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <div className="card-body p-2">
                  <h6 className="text-truncate">{m.title}</h6>
                  <p className="mb-1">
                    ⭐ <span className="text-warning">{m.rating}</span>
                  </p>
                  <button className="btn btn-outline-light btn-sm w-100 mb-1">
                    Watch options
                  </button>
                  <button className="btn btn-outline-warning btn-sm w-100">
                    ▶ Trailer
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 Coming Soon */}
      <div className="container mb-5">
        <h3 className="text-warning mb-3">Coming Soon</h3>
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card bg-dark text-light h-100 border-0">
              <img
                src="https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg"
                className="card-img-top"
                alt="Avatar 3"
              />
              <div className="card-body">
                <h6>Avatar 3</h6>
                <p>Expected 2026</p>
                <button className="btn btn-warning btn-sm">Notify Me</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card bg-dark text-light h-100 border-0">
              <img
                src="https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg"
                className="card-img-top"
                alt="Inception 2"
              />
              <div className="card-body">
                <h6>Inception 2</h6>
                <p>Rumored Project</p>
                <button className="btn btn-warning btn-sm">Notify Me</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Footer */}
      <footer className="bg-black text-center py-4">
        <p className="mb-0">© 2025 IMDb Clone Project</p>
      </footer>
    </div>
  );
}

export default Home;
