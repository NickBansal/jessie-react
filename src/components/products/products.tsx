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
  iscountPercentage: number;
  description: string;
}

export const Products = () => {
  // "https://dummyjson.com/products"

  const [products, setProducts] = useState<Product[]>([]);

  const callProductData = async () => {
    const productsBeforeJSON = await fetch("https://dummyjson.com/products");
    const productsAfterJSON = await productsBeforeJSON.json();
    setProducts(productsAfterJSON.products);
  };

  useEffect(() => {
    callProductData();
  }, []);

  return (
    <>
      <h1>Products</h1>
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
