import React from "react";
import useApiCall from "utils/hooks/api-call";

import { EachUserStyled, H5Styled, UserArea } from "./users.style";

import "./users.css";

export interface EachUser {
  address: {
    street: string;
    city: string;
    state: string;
    zipcode: string;
  };
  email: string;
  id: number;
  name: string;
  username: string;
}

export const Users = () => {
  const { error, data } = useApiCall<EachUser[]>({
    url: "https://dummyapi.online/api/users"
  });
  console.log(error, data);
  return (
    <UserArea>
      {data?.map((each: EachUser) => (
        <EachUserStyled key={each.id}>
          <H5Styled area="Username">Username: </H5Styled>
          <H5Styled area="username">{each.username}</H5Styled>
          <H5Styled area="Name">Name:</H5Styled>
          <H5Styled area="name">{each.name}</H5Styled>
          <H5Styled area="Email">Email: </H5Styled>
          <H5Styled area="email">{each.email}</H5Styled>
          <H5Styled area="Address">Address:</H5Styled>
          <H5Styled area="address">
            {each.address.street}, {each.address.city},{each.address.state},{" "}
            {each.address.zipcode}
          </H5Styled>
        </EachUserStyled>
      ))}
    </UserArea>
  );
};
