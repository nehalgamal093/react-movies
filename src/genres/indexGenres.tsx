import { Link } from "react-router-dom";

export default function IndexGenres() {
  return (
    <>
      <h3>Genres</h3>
      <Link className="btn btn-primary"to="/genre/create">Create genre</Link>
    </>
  );
}
