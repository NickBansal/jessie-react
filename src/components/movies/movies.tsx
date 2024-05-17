import React from "react";
import useApiCall from "utils/hooks/api-call";

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
    <div className="movies_area">
      {data &&
        data.slice(0, 20).map((eachMovie: EachMoive) => {
          return (
            <div key={eachMovie.id} className="each_movie">
              <div className="movie_imge">
                <img src={eachMovie.imdb_url} />
              </div>
              <div className="movie_wording">
                <h4>Name: {eachMovie.movie}</h4>
                <h4>Rating:{eachMovie.rating}</h4>
              </div>
            </div>
          );
        })}
    </div>
  );
};
