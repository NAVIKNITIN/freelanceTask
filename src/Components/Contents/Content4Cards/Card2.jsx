import React,{useState} from "react";
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
import { Card, CardHeader, Container, Paper } from "@material-ui/core";
import { ArrowDownwardOutlined, ArrowUpwardOutlined } from "@material-ui/icons";

const Card2 = () => {

    const [modalfooterCondition, setmodalfooterCondition] = useState(false);

  const handlingDetail = () => {
    setmodalfooterCondition(!modalfooterCondition);
  };
  const characters = [
    {
      id: 1,
      head: "Match 1",
      cake: 545,
      amt: 211,
    },
    {
      id: 2,
      head: "Match 2",
      cake: 878,
      amt: 213,
    },
    {
      id: 3,
      head: "Match 3",
      cake: 213,
      amt: 211,
    },
    {
      id: 4,
      head: "Match 4",
      cake: 2121,
      amt: 122,
    },
    {
      id: 5,
      head: "Match 5",
      cake: 2121,
      amt: 122,
    },
    {
      id: 6,
      head: "Match 6",
      cake: 2121,
      amt: 122,
    },
  ];

  const CardListItem = (props) => {
    return (
      <div>
        <p style={{ color: "rgb(118 69 217)", fontSize: "14px" }}>
          <strong>{props.character.head}</strong>
        </p>
        <p style={{ fontSize: "16px", fontWeight: 600 }}>
          {props.character.cake} CAKE
        </p>
        <p style={{ fontSize: "11px" }}>~${props.character.amt}</p>
      </div>
    );
  };

  const CardList = () => {
    return (
      <div className="container__item3--roundcardlist">
        {characters.map((character) => {
          return <CardListItem character={character} key={character.id} />;
        })}
      </div>
    );
  };
  return (
    <Card
      sx={{ maxWidth: 400 }}
      elevation={5}
      style={{
        borderRadius: "15px",
        overFlow: "hidden",
        width: "800px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#b7b2b2",
          fontSize: "15px",
          borderBottom: "1px solid #b7b2b2",
          
        }}
      >
        <div style={{ padding: "10px" }}>
          <p style={{ fontWeight: 750, color: "white" }}>Rounds</p>
        </div>
       
      </div>

      <div
        className="TicketText2"
        style={{
          borderBottom: "1px solid grey",
        }}
      >
        <p style={{color:"grey",fontSize:"15px"}}>Connect your wallet to check your history</p >
        <Button className="BTNTicket2" style={{width:"130px",justifySelf:"center"}}>Connect Wallet</Button>
      </div>
      <div style={{ backgroundColor: "#b7b2b2" }}>
      Only showing data for Lottery V2
      </div>
    </Card>
  );
};

export default Card2;
