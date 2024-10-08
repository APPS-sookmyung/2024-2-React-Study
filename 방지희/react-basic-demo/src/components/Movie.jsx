import React from "react";

export default function Movie({ title, poster_path, vote_average }) {
  return (
    <div className="movie-container">
      <img src={poster_path} alt="영화포스터" />
      <div className="movie-info">
        <h4>{title}</h4>
        <span>{vote_average}</span>
      </div>
    </div>
  );
}
