import React from "react";
import useApiCall from "utils/hooks/api-call";

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
    <div className="user_area">
      {data?.map((each: EachUser) => {
        return (
          <div key={each.id} className="each_user">
            <h5 className="Username">Username: </h5>
            <h5 className="username">{each.username}</h5>
            <h5 className="Name">Name:</h5>
            <h5 className="name">{each.name}</h5>
            <h5 className="Email">Email: </h5>
            <h5 className="email">{each.email}</h5>
            <h5 className="Address">Address:</h5>
            <h5 className="address">
              {each.address.street}, {each.address.city},{each.address.state},{" "}
              {each.address.zipcode}
            </h5>
          </div>
        );
      })}
    </div>
  );
};
