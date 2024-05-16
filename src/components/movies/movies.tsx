import React from "react";
import useApiCall from "utils/hooks/api-call";

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
    <>
      {data &&
        data.slice(0, 20).map((eachMovie: EachMoive) => {
          return (
            <div key={eachMovie.id}>
              <img src={eachMovie.imdb_url} />
              <h3>Name:{eachMovie.movie}</h3>
              <h3>Name:{eachMovie.rating}</h3>
            </div>
          );
        })}
    </>
  );
};
