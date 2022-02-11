import { Card, CardHeader, Container, Paper } from "@material-ui/core";
import { ArrowDownwardOutlined, ArrowUpwardOutlined } from "@material-ui/icons";
import React, { useState } from "react";


import {
  Col,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  ModalFooter,
  Button,
} from "reactstrap";


const Content1 = () => {
  const [modalfooterCondition, setmodalfooterCondition] = useState(false);

  const handlingDetail = () => {
    setmodalfooterCondition(!modalfooterCondition);
  };
  const characters = [
    {
      id: 1,
      head: "Match 1",
      cake: 545,
      amt: 211
    },
    {
      id: 2,
      head: "Match 2",
      cake: 878,
      amt: 213
    },
    {
      id: 3,
      head: "Match 3",
      cake: 213,
      amt: 211
    },
    {
      id: 4,
      head: "Match 4",
      cake:2121,
      amt: 122
    }
  ];

  
const CardListItem = props => {
  return (
      <div
        style={{
        }}
      >
        <p style={{color:"rgb(118 69 217)",fontSize:"14px"}}>
          <strong>{props.character.head}</strong>
        </p>
        <p style={{fontSize:"16px", fontWeight:600}}>{props.character.cake} CAKE</p>
        <p style={{fontSize:"11px"}}>~${props.character.amt}</p>
      </div>
  );
};

const CardList = () => {
  return (
    <div className="Card" >
      {characters.map(character => {
        return <CardListItem character={character} key={character.id} />;
      })}
    </div>
  );
};
  return (
    <div className="ContentComponent2">
      <div
        style={{
          alignItems: "flex-start",
          justifyContent: "center",
          paddingTop: "190px",
        }}
        className="content1"
      >
        <div>
          <h1 style={{ color: "white" }}>
            <b>Get your Tickets now!</b>
          </h1>
          <h2 style={{  }}>
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

          <Card
            sx={{ maxWidth: 400 }}
            elevation={5}
            style={{
              borderRadius: "15px",
              overFlow: "hidden",
              width: "600px",
            }}
          >
            <div style={{ display: "grid", gridAutoFlow: "column" ,backgroundColor:"rgb(221, 211, 211)",color:"blue"}}>
              <h3>Next Draw</h3>
              <h5>#464675 | Draw:Feb 3 , 2022 , 5:30 PM</h5>
            </div>
            <div className="TicketText">
              <h4>Prize Pot</h4>
              <h3>~$123,125</h3>
            </div>
            <div className="TicketText">
              <h4 style={{ paddingLeft: "10px", alignItems: "center" }}>
                Your Tickets
              </h4>
              <Button className="BTNTicket">Buy Tickets</Button>
            </div>
            <div style={{backgroundColor:"rgb(221, 211, 211)" }}>
            {modalfooterCondition ? (
              <Container>
                <div className="container_row"></div>
                <p style={{fontSize:"12px",padding:"20px 0px"}}>Match the winning number in the same order to share prizes. Current prizes up for grabs:</p>
                <CardList />
              </Container>
            ) : ""}
           
              <Button className="BTNDetails" onClick={handlingDetail}>
                {modalfooterCondition ? (
                  <p style={{ fontWeight: 1000 ,display:"flex"}}>Hide<ArrowUpwardOutlined style={{height:"18px"}}></ArrowUpwardOutlined></p>
                ) : (
                  <p style={{ fontWeight: 1000 ,display:"flex"}}>Details <ArrowDownwardOutlined style={{height:"18px"}}></ArrowDownwardOutlined></p>
                )}
              </Button>
             
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Content1;
