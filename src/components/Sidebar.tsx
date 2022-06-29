import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ArticleIcon from "@mui/icons-material/Article";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const itemList = [
    {
      icon: (
        <>
          <HomeIcon sx={{ marginRight: "1rem" }} />
        </>
      ),
      name: "Dashboard",
    },
    {
      icon: (
        <>
          <AttachMoneyIcon sx={{ marginRight: "1rem" }} />
        </>
      ),
      name: "Financial Statement",
    },
    {
      icon: (
        <>
          <ArticleIcon sx={{ marginRight: "1rem" }} />
        </>
      ),
      name: "Core data",
    },
    {
      icon: (
        <>
          <FavoriteBorderIcon sx={{ marginRight: "1rem" }} />
        </>
      ),
      name: "Favourites",
    },
    {
      icon: (
        <>
          <CardGiftcardIcon sx={{ marginRight: "1rem" }} />
        </>
      ),
      name: "Premium upgrade",
    },
  ];
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <ListItemButton>
        <ListItemText>EXPLORE MORE</ListItemText>
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
    </Box>
  );
}
