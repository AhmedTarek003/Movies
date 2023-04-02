import { Row } from "react-bootstrap";
import Pagination from "./Pagination";
import MoviesList from "./MoviesList";

function CardMovie({ movies, getPage, totalPages }) {
  // const movies = useSelector((state) => state.movie);

  return (
    <Row className="pt-3">
      {movies.length >= 1 ? (
        movies.map((movie) => {
          return <MoviesList key={movie.id} movie={movie} />;
        })
      ) : (
        <h2 className="text-white d-flex justify-content-center mt-5">
          لا يوجد أفلام ...
        </h2>
      )}
      {movies.length >= 1 ? (
        <Pagination getPage={getPage} totalPages={totalPages} />
      ) : null}
    </Row>
  );
}

export default CardMovie;
