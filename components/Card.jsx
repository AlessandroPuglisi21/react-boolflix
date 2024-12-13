import React from "react";
import ImgUrl from "../context/ImgUrl";
import setFlags from "./SetFlags";
import stars from "./Stars";

export default function Card({ data }) {
  const {
    id,
    title,
    name,
    original_title,
    original_name,
    poster_path,
    original_language,
    vote_average,
  } = data;

  const poster = poster_path
    ? `${ImgUrl.IMG_URL}${poster_path}`
    : `${ImgUrl.emptyIMG}`;
  const vote = vote_average ? (vote_average / 2).toFixed(1) : "N/A";

  return (
    <div className="card-container">
      <div className="card">
        <div className="card-front">
          <img
            src={poster}
            alt={`${title || name} poster`}
            className="card-image"
          />
        </div>
        <div className="card-back">
          <h2>{title || name}</h2>
          <h3>Titolo Originale: {original_title || original_name}</h3>
          <p>Lingua: {original_language}</p>
          <p>
            Voto: {stars(vote)}
            <img
              src={setFlags(original_language)}
              alt="Flag"
              style={{ width: "25px", marginLeft: "5px" }}
            />
          </p>
        </div>
      </div>
    </div>
  );
}
