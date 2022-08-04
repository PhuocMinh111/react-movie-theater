import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleMovieApi } from "../../services/movie";

export default function MovieDetail() {
  const [movie, setMovie] = useState();
  const param = useParams();

  useEffect(() => {
    fetchMovie();
  }, []);
  async function fetchMovie() {
    const result = await fetchSingleMovieApi(param.movieId);
    const data = await result.data;
    console.log(data);

    setMovie(data);
  }

  return (
    movie && (
      <div className="p-lg-5 p-sm-0 row">
        <div className="col-4">
          <img src={movie.hinhAnh} alt="" srcset="" />
        </div>
        <div className="col-8">hello</div>
      </div>
    )
  );
}