import { useParams } from "react-router-dom";

function MovieDetail() {
  const { id } = useParams();

  return (
    <div className="container my-4">
      <div className="card p-4">
        <h2>Movie Detail Page</h2>
        <p><strong>ID:</strong> {id}</p>
        <p><strong>Title:</strong> Inception</p>
        <p><strong>Year:</strong> 2010</p>
        <p><strong>Rating:</strong> 8.8</p>
        <p><strong>Plot:</strong> A thief who enters dreams to steal secrets gets a chance at redemption.</p>
      </div>
    </div>
  );
}
export default MovieDetail;
