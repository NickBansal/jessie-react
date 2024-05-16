import React from "react";
import useApiCall from "utils/hooks/api-call";

import "./products.css";

export interface Products {
  products: {
    brand: string;
    category: string;
    description: string;
    id: number;
    images: string[];
    title: string;
    price: number;
    rating: number;
  }[];
}

export const Products = () => {
  const { error, data } = useApiCall<Products>({
    url: "https://dummyjson.com/products"
  });
  console.log(error, data);
  return (
    <div className="product_area">
      {data &&
        data.products.map((product) => {
          return (
            <div key={product.id} className="eachphone">
              <img src={product.images[0]} />
              <div className="wording_parts">
                <h3>Brand: {product.brand}</h3>
                <h3>Price: {product.price} </h3>
                <h4>Rating: {product.rating}</h4>
                <h6>Description: {product.description}</h6>
              </div>
            </div>
          );
        })}
    </div>
  );
};
