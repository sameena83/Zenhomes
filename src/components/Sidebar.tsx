import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

const drawerWidth = 240;
export interface State extends SnackbarOrigin {
  open: boolean;
}
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
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

  const itemList = [
    {
      icon: (
        <>
          <HomeIcon sx={{ marginRight: "1rem" }} />
        </>
      ),
      name: "Maintenance",
    },
    {
      icon: (
        <>
          <BusinessCenterIcon sx={{ marginRight: "1rem" }} />
        </>
      ),
      name: "New rental",
    },
    {
      icon: (
        <>
          <ChatBubbleOutlineIcon sx={{ marginRight: "1rem" }} />
        </>
      ),
      name: "Chat",
    },
  ];

  const drawer = (
    <div>
      <Divider />

      <ListItemButton>
        <ListItemText> EXPLORE MORE</ListItemText>
      </ListItemButton>
      <Divider />
      {itemList.map((item) => (
        <ListItem>
          <ListItemButton>
            {item.icon}

            {item.name}
          </ListItemButton>
        </ListItem>
      ))}

      <ListItemButton
        onClick={handleClick({
          vertical: "top",

          horizontal: "center",
        })}
      >
        <>
          <NotificationsNoneIcon sx={{ marginLeft: "1rem" }} />
        </>

        <ListItemText sx={{ marginLeft: "1rem" }}>Notification</ListItemText>
      </ListItemButton>

      <Divider />
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            marginTop: "5rem",
          },
        }}
        open
      >
        {drawer}
      </Drawer>

      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        autoHideDuration={4000}
        key={vertical + horizontal}
        message=" Rent Due on DD/MM/YYYY. Don't forget to pay.."
      />
    </Box>
  );
}
