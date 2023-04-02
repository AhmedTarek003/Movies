import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function MoviesList({ movie }) {
  return (
    <Col sm="4" xs="6" md="3" lg="3" className="my-1 ">
      <Link to={`movie/${movie.id}`}>
        <div className="curd">
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
              alt=""
              className="card__image"
            />
          </div>
          <div className="card__overlay">
            <div className="overlay__text ">
              <p>اسم الفليم : {movie.original_title} </p>
              <p>تاريخ الأصدار : {movie.release_date}</p>
              <p>المقيمين : {movie.vote_count}</p>
              <p>التقيم : {movie.vote_average}</p>
            </div>
          </div>
        </div>
      </Link>
    </Col>
  );
}

export default MoviesList;
