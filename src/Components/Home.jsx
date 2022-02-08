import React from "react";
import { TableRow } from "@material-ui/core";
import { Container, Row, Col } from "reactstrap";
import Content1 from "./Contents/Content1";
import Content2 from "./Contents/Content2";
import Content3 from "./Contents/Content3";


const Home = () => {
  return (
   <>
   <Content1 />
   <Content2 />
   <Content3 />
   </>
  );
};

export default Home;
