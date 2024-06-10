import React from "react";
import useApiCall from "utils/hooks/api-call";

import {
  Eachphone,
  EachphoneImg,
  EachProductDes,
  ProductArea,
  WordingParts
} from "./products.styled";

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
  const { data, error } = useApiCall<Products>({
    url: "https://dummyjson.com/products"
  });

  return (
    <ProductArea>
      {data?.products.length === 0 && <p>Data is not available</p>}
      {!error &&
        data &&
        data.products.map((product) => {
          return (
            <Eachphone key={product.id}>
              <EachphoneImg src={product.images[0]} />

              <WordingParts>
                <EachProductDes>Brand: {product.brand}</EachProductDes>
                <EachProductDes>Price: {product.price} </EachProductDes>
                <EachProductDes>Rating: {product.rating}</EachProductDes>
                <EachProductDes>
                  Description: {product.description}
                </EachProductDes>
              </WordingParts>
            </Eachphone>
          );
        })}
      {error && <p>The api call has failed</p>}
    </ProductArea>
  );
};
