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
  const { error, data } = useApiCall<Products>({
    url: "https://dummyjson.com/products"
  });
  console.log(error, data);
  return (
    <ProductArea>
      {data &&
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
    </ProductArea>
  );
};
