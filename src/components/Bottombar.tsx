import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import HomeIcon from "@mui/icons-material/Home";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";

export interface State extends SnackbarOrigin {
  open: boolean;
}

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  const [state, setState] = React.useState<State>({
    open: false,
    vertical: "top",
    horizontal: "left",
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState: SnackbarOrigin) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const bottom = (
    <BottomNavigationAction
      onClick={handleClick({
        vertical: "top",
        horizontal: "center",
      })}
      label="Notification"
      icon={<NotificationsNoneIcon />}
    />
  );
  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          position: "fixed",
          top: "auto",
          bottom: 0,
          width: "100vw",
          display: { sm: "none" },
        }}
      >
        <BottomNavigationAction label="Maintenance" icon={<HomeIcon />} />
        <BottomNavigationAction
          label="New Rental"
          icon={<BusinessCenterIcon />}
        />
        <BottomNavigationAction label="Chat" icon={<ChatBubbleOutlineIcon />} />
        {bottom}
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={handleClose}
          autoHideDuration={4000}
          key={vertical + horizontal}
          message=" Rent Due on DD/MM/YYYY. Don't forget to pay.."
        />
      </BottomNavigation>
    </Box>
  );
}
