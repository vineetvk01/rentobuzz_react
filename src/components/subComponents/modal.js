import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import City from "../microcomponents/city";
import Bangalore from "../../../public/images/city_logo/bangalore.png";
import Mumbai from "../../../public/images/city_logo/mumbai.png";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default function TransitionsModal(props) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        style={{ color: "#fff" }}
        onClick={handleClickOpen}
      >
        <LocationOnIcon /> {props.cityName} <ExpandMoreIcon />
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Please Select Your City"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            This will help us to show the produc in your location
          </DialogContentText>
        </DialogContent>
        <Button onClick={handleClose}>
          <City cityName="Banglore" cityImg={Bangalore} />
        </Button>
        <Button onClick={handleClose}>
          <City cityName="Mumbai" cityImg={Mumbai} />
        </Button>
      </Dialog>
    </div>
  );
}
