import React, { Fragment, useState, useEffect } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
import "./BuyTicket.scss"
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { makeStyles, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import { useTheme } from '@mui/material/styles';
const useStyle = makeStyles({
  modal: {
   
    borderRadius: "18px",
    zIndex: 30000,
    width: "50%",
    position: "relative",
    overflow: "hidden",
  },
  btn1: {
    // right:"15px",
    marginRight: "4px",
    color: "white",
    backgroundColor: "#3498DB",
    "&:hover": {
      backgroundColor: "#3498DB",
    },
  },
});

function BuyTicketsModal(props) {
    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('xs');
    const handleMaxWidthChange = (event) => {
      setMaxWidth(
        // @ts-expect-error autofill of arbitrary value is not handled.
        event.target.value,
      );
    };
  
    const handleFullWidthChange = (event) => {
      setFullWidth(event.target.checked);
    };
  const classes = useStyle();
  const theme = useTheme();
  const OnBuyTicket = async (e) => {
    props.buyTicketToggle();
  };
  console.log(props)
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <React.Fragment>
    
    <Dialog
        className="buyTicketModal"
      open={props.buyticketsCondition}
      onClose={props.buyTicketToggle}
    >
      <DialogTitle className="buyTicketModal--head">
        <div>Buy Tickets</div>
        <Button onClick={props.buyTicketToggle}>x</Button>
        </DialogTitle>
      <div className="buyTicketModal--body"> 
      <div className="buyTicketModal--body--body1">
        <p className="buyTicketModal--body--body1--p1">Buy:</p>
        <p className="buyTicketModal--body--body1--p2">Tickets</p>
      </div>
      <div className="buyTicketModal--body--body2">
      <input pattern="^[0-9]*[.,]?[0-9]{0,18}$" inputmode="decimal"
       min="0" placeholder="0" scale="md"  value="" style={{textDecoration:"none",border:"none",backgroundColor:"rgb(221, 218, 233)"}}/>
      </div>
      <div className="buyTicketModal--body--body3">
        3
      </div>
      <div className="buyTicketModal--body--body4">
        4
      </div>
      <div className="buyTicketModal--body--body5">
        5
      </div>
      <div className="buyTicketModal--body--body6">
        6
      </div>
     
      </div>
      
      <DialogTitle className="buyTicketModal--footer">
      "Buy Instantly" chooses random numbers, with no duplicates among your tickets. Prices are set before each round starts, equal to $5 at that time. Purchases are final.
      </DialogTitle>
    </Dialog>
  </React.Fragment>
  );
}

export default BuyTicketsModal;
