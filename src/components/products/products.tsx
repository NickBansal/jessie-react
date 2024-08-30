import React from "react";
import { useState, useEffect } from "react";
import {
  Img,
  ProductsWrapper,
  SignleProductWrapper,
  ProductTitle
} from "./products.styled";

interface Product {
  id: number;
  title: string;
  price: number;
  stock: number;
  brand: string;
  images: string;
  rating: number;
}

export const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | unknown>("");
  const [loading, setLoading] = useState<boolean>(true);

  const callProductData = async () => {
    try {
      const productsBeforeJSON = await fetch("https://dummyjson.com/products");
      const productsAfterJSON = await productsBeforeJSON.json();
      setProducts(productsAfterJSON.products);
      setLoading(false);
    } catch (e: unknown) {
      setError(e);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      callProductData();
    }, 3000);
  }, []);

  return (
    <>
      <h1>Products</h1>
      {error !== "" && <p>sorry, there is an error, please try again later</p>}
      {loading && <p>Loading.....</p>}
      <ProductsWrapper>
        {products &&
          products.map((each: Product) => {
            return (
              <SignleProductWrapper key={each.id}>
                <ProductTitle>{each.title}</ProductTitle>
                <p>£{each.price}</p>
                <p>{each.stock} in stock</p>
                <p>Rating: {each.rating}</p>
                <Img src={each.images} />
              </SignleProductWrapper>
            );
          })}
      </ProductsWrapper>
    </>
  );
};
