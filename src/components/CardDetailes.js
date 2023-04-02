import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function CardDetailes() {
  const params = useParams();
  const [movie, setMovie] = useState([]);

  const getMovieDetaiels = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=52ef927bbeb21980cd91386a29403c78&language=ar`
    );
    setMovie(res.data);
  };

  useEffect(() => {
    getMovieDetaiels();
  }, []);
  return (
    <div>
      <Row className="mt-4 d-flex align-items-center line pb-4">
        <Col className="text-white ">
          <p>
            اسم الفليم : <b>{movie.original_title}</b>
          </p>
          <p>
            تاريخ الأصدار : <b> {movie.release_date}</b>
          </p>
          <p>
            المقيمين : <b> {movie.vote_count}</b>
          </p>
          <p>
            التقيم : <b> {movie.vote_average}</b>
          </p>
        </Col>
        <Col>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
              alt=""
              className="poster-image"
            />
          </div>
        </Col>
      </Row>

      <Row className=" mt-3">
        <Col className="text-white">
          <div>
            <div className="mb-1">القصه :</div>
            <div>{movie.overview}</div>
          </div>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col className="d-flex justify-content-center ">
          <Link to={"/"} className="buttons text-center">
            عوده للرئسيه
          </Link>
          <Link to={movie.homepage} className="buttons text-center">
            مشاهده الفليم
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default CardDetailes;
