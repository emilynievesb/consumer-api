import { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Container } from "react-bootstrap";
import { getIcecreamAxios } from "./api/icecream";

import IcecreamList from "./components/IcecreamList";
import Menu from "./components/Menu";
import FormCreate from "./components/FormCreate";

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
      <Router>
        <Menu />
        <Routes>
          <Route
            path="/icecream"
            exact
            element={<IcecreamList list={icecreams} />}
          />

          <Route path="/icecream/create" exact element={<FormCreate />}></Route>
          <Route path="/icecream/update" exact element={<h1>update</h1>} />
          <Route path="/icecream/delete" exact element={<h1>delete</h1>} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
