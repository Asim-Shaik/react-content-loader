import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
} from "@mui/material";
import React from "react";
// import Dialog from "@material-ui/core/Dialog";
// import DialogTitle from "@material-ui/core/DialogTitle";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogActions from "@material-ui/core/DialogActions";
// import Button from "@material-ui/core/Button";

const UnskippablePopup = ({ open, title, message }) => {
  return (
    <Dialog
      open={open}
      maxWidth="sm"
      fullWidth={true}
      PaperProps={{ style: { borderRadius: 15 } }}
    >
      <DialogTitle
        fontSize={35}
        fontWeight="bold"
        textTransform="capitalize"
        textAlign="center"
      >
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          fontSize={20}
          textTransform="capitalize"
          textAlign="center"
        >
          {message}
        </DialogContentText>
      </DialogContent>
      <Divider></Divider>
      <DialogActions
        style={{
          dispay: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button color="primary" onClick={() => {}}>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UnskippablePopup;
