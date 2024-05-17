import React from "react";
import useApiCall from "utils/hooks/api-call";

import { EachMovie, MoviesArea, MovieWording } from "./movies-styles";

import "./movies.css";

export interface EachMoive {
  id: number;
  image: string;
  imdb_url: string;
  movie: string;
  rating: number;
}

export const Movies = () => {
  const { error, data } = useApiCall<EachMoive[]>({
    url: "https://dummyapi.online/api/movies"
  });
  console.log(error, data);
  return (
    <MoviesArea>
      {data &&
        data.slice(0, 20).map((eachMovie: EachMoive) => {
          return (
            <EachMovie key={eachMovie.id}>
              <div className="movie_imge">
                <img src={eachMovie.imdb_url} />
              </div>
              <MovieWording>
                <h4>Name: {eachMovie.movie}</h4>
                <h4>Rating:{eachMovie.rating}</h4>
              </MovieWording>
            </EachMovie>
          );
        })}
    </MoviesArea>
  );
};
