import { Paper } from "@material-ui/core";
import React from "react";
import { Col, Row, Modal, ModalHeader, ModalBody, Label, ModalFooter,Button } from "reactstrap";

const Content1 = () => {
  return (
    <div className="ContentComponent2">
      <div
        style={{ alignItems: "flex-start", justifyContent: "center",paddingTop:"130px" }}
        className="content1"
      >
        <div>
          <h1 style={{ color: "white" }}>
            <b>Get your Tickets now!</b>
          </h1>
          <h2 style={{ marginTop: "-40px" }}>
            <span style={{ color: "white" }}>
              <p
                style={{
                  color: "orange",
                  display: "inline-flex",
                  fontSize: "150%",
                }}
              >
                2 <p style={{ fontSize: "50%" }}> h</p> 49
                <p style={{ fontSize: "50%" }}>m</p>
              </p>
              <small> until the draw</small>
            </span>
          </h2>
          <Paper elevation={5} style={{borderRadius:"15px" ,overFlow:"hidden" , width:"40vw",height:"30vh"}}>
             <div style={{display:"grid",gridAutoFlow:"column"}}>
               <h3>Next Draw</h3>
               <h5>#464675 | Draw:Feb 3 , 2022 , 5:30 PM</h5>
             </div>
              <div style={{display:"grid",gridAutoFlow:"column"}}>
                <Row className="p-3">
                  <Col><Label>Prize Pot</Label> </Col>
                  <span>~$123,125</span>
                </Row>
                <Row className="p-3">
                  <Col><Label>Your Tickets</Label> </Col>
                  <Col><Button>Buy Tickets</Button></Col>
                </Row>
              </div>
              <ModalFooter></ModalFooter>
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default Content1;
