import React from "react";

import { Movies } from "components/movies/movies";
import { Products } from "components/products/products";
import { Users } from "components/users/users";

import { Header } from "./components/header/header";

import "./App.css";

function App() {
  // const [testData, setTestData] = useState();

  // const testAPI = async () => {
  //   const dataFromAPI = await fetch("https://dummyapi.online/api/movies");
  //   const dataInJson = await dataFromAPI.json();
  //   setTestData(dataInJson);
  // };

  // useEffect(() => {
  //   testAPI();
  // }, []);

  // console.log(testData);

  return (
    <div className="App">
      <Header />
      <h1>The followings are products</h1>
      <Products />
      <h1>The followings are movies</h1>
      <Movies />
      <h1>The followings are Users</h1>
      <Users />
    </div>
  );
}

export default App;
