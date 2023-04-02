import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router";
import "./App.css";
import CardDetailes from "./components/CardDetailes";
import CardMovie from "./components/CardMovie";
import NavBar from "./components/NavBar";

function App() {
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const getAllMovies = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=en-US"
    );
    setMovies(res.data.results);
    setTotalPages(res.data.total_pages);
  };
  useEffect(() => {
    getAllMovies();
  }, []);

  const search = async (word) => {
    if (word === "") {
      getAllMovies();
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${word}&language=ar`
      );
      setMovies(res.data.results);
      setTotalPages(res.data.total_pages);
    }
  };

  const getPage = async (page) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=en-US&page=${page}`
    );
    setMovies(res.data.results);
    setTotalPages(res.data.total_pages);
  };

  return (
    <div className="App">
      <NavBar search={search} />
      <Container>
        <Routes>
          <Route
            path="/"
            element={
              <CardMovie
                movies={movies}
                getPage={getPage}
                totalPages={totalPages}
              />
            }
          />
          <Route path="/movie/:movieId" element={<CardDetailes />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
