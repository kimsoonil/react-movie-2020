import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

function Home() {
  const [isLoading, seIisloading] = useState(true);
  const [movieList, setMoviesList] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const getMovies = async () => {
      seIisloading(true);

      try {
        const {
          data: {
            data: { movies },
          },
        } = await axios.get(
          "https://yts.mx/api/v2/list_movies.json?sort_by=download_count"
        );

        if (isMounted) {
          console.log("movies : ", movies);
          setMoviesList(movies);
        }
      } catch (error) {
        console.log("error : ", error);
      } finally {
        seIisloading(false);
      }
    };

    getMovies();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="container">
      {isLoading ? (
        <div className="loader">
          {" "}
          <span className="loader_text">loading...</span>
        </div>
      ) : (
        <div className="movies">
          {movieList.map((movie) => {
            return (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}

export default Home;
