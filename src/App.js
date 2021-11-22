import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { getIcecreamAxios } from "./api/icecream";

import IcecreamList from "./components/IcecreamList";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
  const [icecreams, setIcecreams] = useState([]);
  // const getIcecreamFetch = () => {
  //   const endpoint = "/icecream";
  //   fetch(`${API_URL}${endpoint}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       //
  //       console.log(data, "data");
  //       setIcecreams(data);
  //     });
  // };

  useEffect(() => {
    async function axios() {
      const data = await getIcecreamAxios();
      setIcecreams(data);
    }
    axios();
  }, []);
  return (
    <Container>
      <IcecreamList list={icecreams} />
    </Container>
  );
}

export default App;
