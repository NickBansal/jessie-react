import React, { useEffect, useState } from "react";

import { EachCar } from "./cars-types";

export const Cars = () => {
  const [data, setData] = useState<EachCar[]>([]);
  const [error, setError] = useState("No Error");
  const [carSelected, setCarSelected] = useState<EachCar>();

  const fetchData = async () => {
    try {
      const dataFromAPI = await fetch("https://freetestapi.com/api/v1/cars");
      const dataInJson = await dataFromAPI.json();
      setData(dataInJson);
    } catch (error) {
      if (error instanceof Error) setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data, error);

  const fetchACar = async (id: number) => {
    const car = await fetch(`https://freetestapi.com/api/v1/cars/${id}`);
    const carjson = await car.json();
    setCarSelected(carjson);
    console.log(id);
  };

  console.log(carSelected);

  return (
    <div>
      <p>WELCOME TO CARS</p>
      <select onChange={(e) => fetchACar(Number(e.target.value))}>
        <option value="" hidden>
          Select
        </option>
        {data &&
          data.map((eachCar: EachCar) => {
            return (
              <option key={eachCar.id} value={eachCar.id}>
                {eachCar.make}, {eachCar.model}, {eachCar.price}
              </option>
            );
          })}
      </select>
      <div>
        {carSelected && (
          <div>
            <img src={carSelected.image} />
            <p>Make: {carSelected.make}</p>
            <p>Model:{carSelected.model}</p>
            <p>Color: {carSelected.color}</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Make a call to the endpoint - https://freetestapi.com/api/v1/cars
// Populate a select drop down menu within a form with the results, each item should include the make, model & price
// From the dropdown options I want you to make an API call to a specific car https://freetestapi.com/api/v1/cars/${id}
// Show and style all the information below the dropdown menu
// Add your own styles to this project
// do not use the custom hook
