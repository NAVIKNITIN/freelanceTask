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

const Card1 = () => {

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
          backgroundColor: "rgb(221, 211, 211)",
          fontSize: "15px",
          borderBottom: "1px solid rgb(221, 211, 211)",
        }}
      >
        <div style={{ padding: "10px" }}>
          <p style={{ fontWeight: 750, color: "blue" }}>Round</p>
          <span style={{ fontSize: "11px", color: "blue" }}>
            Draw:Feb 3 , 2022 , 5:30 PM
          </span>
        </div>
        <div style={{ padding: "10px" ,color: "blue" }}>
          <button
            scale="sm"
            style={{
              marginLeft: "5px",
              height: "24px",
              background: "rgb(221, 211, 211)",
              border: "none",
              cursor: "pointer",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              color="text"
              width="20px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 11H7.82998L12.71 6.12C13.1 5.73 13.1 5.09 12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7L4.70998 11.29C4.31998 11.68 4.31998 12.31 4.70998 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.82998 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z" />
            </svg>
          </button>
          <button
            scale="sm"
            style={{
              marginLeft: "5px",
              height: "24px",
              background: "rgb(221, 211, 211)",
              border: "none",
              cursor: "pointer",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              color="text"
              width="20px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 13H16.17L11.29 17.88C10.9 18.27 10.9 18.91 11.29 19.3C11.68 19.69 12.31 19.69 12.7 19.3L19.29 12.71C19.68 12.32 19.68 11.69 19.29 11.3L12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7C10.91 5.09 10.91 5.72 11.3 6.11L16.17 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13Z" />
            </svg>
          </button>
          <button
            scale="sm"
            style={{
              marginLeft: "5px",
              height: "24px",
              background: "rgb(221, 211, 211)",
              border: "none",
              cursor: "pointer",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              color="text"
              width="20px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 13.1835H14.17L9.29 18.0635C8.9 18.4535 8.9 19.0935 9.29 19.4835C9.68 19.8735 10.31 19.8735 10.7 19.4835L17.29 12.8935C17.68 12.5035 17.68 11.8735 17.29 11.4835L10.71 4.88347C10.32 4.49347 9.69 4.49347 9.3 4.88347C8.91 5.27347 8.91 5.90347 9.3 6.29347L14.17 11.1835H3C2.45 11.1835 2 11.6335 2 12.1835C2 12.7335 2.45 13.1835 3 13.1835Z" />
              <path d="M20 5.18347C20.5523 5.18347 21 5.63119 21 6.18347V18.1835C21 18.7358 20.5523 19.1835 20 19.1835C19.4477 19.1835 19 18.7358 19 18.1835V6.18347C19 5.63119 19.4477 5.18347 20 5.18347Z" />
            </svg>
          </button>
        </div>
      </div>

      <div
        className="TicketText"
        style={{
          borderBottom: "1px solid grey",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h4 style={{ paddingLeft: "10px", alignItems: "center" }}>
            Your Tickets
          </h4>
        </div>
        <div style={{ display: "flex", padding: "20px" }}>
          <p className="circle" style={{ backgroundColor: "red" }}>
            2
          </p>
          <p className="circle" style={{ backgroundColor: "green" }}>
            3
          </p>
          <p className="circle" style={{ backgroundColor: "blue" }}>
            4
          </p>
          <p className="circle" style={{ backgroundColor: "yellow" }}>
            5
          </p>
          <p className="circle" style={{ backgroundColor: "grey" }}>
            6
          </p>
          <p className="circle" style={{ backgroundColor: "purple" }}>
            7
          </p>
        </div>
      </div>
      <div style={{ backgroundColor: "rgb(221, 211, 211)" }}>
        {modalfooterCondition ? (
          <div class="container">
            <div class="container__item1">
              <h4 className="container__item1--h4">Prize pot</h4>
              <h2 className="container__item1--h2">~$117,108</h2>
              <p className="container__item1--p1">14,125 CAKE</p>

              <p className="container__item1--p2">
                Total players this round: 763
              </p>
            </div>
            <div class="container__item2">
              Match the winning number in the same order to share prizes.
            </div>
            <div class="container__item3">
              <CardList />
            </div>
          </div>
        ) : (
          ""
        )}

        <Button className="BTNDetails2" onClick={handlingDetail}>
          {modalfooterCondition ? (
            <p
              style={{
                fontWeight: 1000,
                display: "flex",
                marginBottom: "20px",
              }}
            >
              Hide
              <ArrowUpwardOutlined
                style={{ height: "18px" }}
              ></ArrowUpwardOutlined>
            </p>
          ) : (
            <p
              style={{
                fontWeight: 1000,
                display: "flex",
                marginBottom: "20px",
              }}
            >
              Details{" "}
              <ArrowDownwardOutlined
                style={{ height: "18px" }}
              ></ArrowDownwardOutlined>
            </p>
          )}
        </Button>
      </div>
    </Card>
  );
};

export default Card1;
