import React from "react";

const FilmPoster = (props) => {
  const posterUrl = "https://image.tmdb.org/t/p/w780/";
  return (
    <div>
      <img className="poster" src={posterUrl + props.images} alt="noImage" />
    </div>
  );
};
export default FilmPoster;
