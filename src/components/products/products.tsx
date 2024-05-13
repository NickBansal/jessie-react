import React from "react";
import useApiCall from "utils/hooks/api-call";

export interface Products {
  products: {
    brand: string;
    category: string;
    description: string;
    id: number;
    images: string[];
    title: string;
  }[];
  total: number;
  skip: number;
}

export const Products = () => {
  const { error, data } = useApiCall<Products>({
    url: "https://dummyjson.com/products"
  });
  console.log(error, data);
  return (
    <>
      {data &&
        data.products.map((product) => {
          return (
            <div key={product.id} className="eachphone">
              <img src={product.images[0]} />
            </div>
          );
        })}
    </>
  );
};
