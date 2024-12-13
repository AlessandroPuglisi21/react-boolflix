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
    overview
  } = data;

  const poster = poster_path
    ? `${ImgUrl.IMG_URL}${poster_path}`
    : `${ImgUrl.emptyIMG}`;
  const vote = (vote_average / 2).toFixed(1)

  function TextWithLimit({ text, maxLength }) {
    const truncatedText = text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  
    return <p>{truncatedText}</p>;
  }

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
          <p><h3>Titolo Originale:</h3> {original_title || original_name}</p>
          <p className="card-language"><h3>Lingua:</h3>  {original_language}   <img
              src={setFlags(original_language)}
              alt="Flag"
              style={{ width: "25px", marginLeft: "5px" }}
            /></p>
          <p>
             {stars(vote)}
          </p>
          <p><h3>Overview:</h3><TextWithLimit text={overview} maxLength={100} /></p>
        </div>
      </div>
    </div>
  );
}
