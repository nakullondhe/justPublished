import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Collapse } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ScheduleSendIcon from "@mui/icons-material/ScheduleSend";
import ScheduleIcon from "@mui/icons-material/Schedule";
import HistoryIcon from "@mui/icons-material/History";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PostAddIcon from "@mui/icons-material/PostAdd";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { useLocation, redirect } from "react-router-dom";

const drawerWidth = 240;

const SideBar = () => {
  const [open, setOpen] = React.useState(true);
  const location = useLocation();

  const handleClick = () => {
    setOpen(!open);
  };

  const menuList = [
    {
      text: "Dashboard",
      icon: <DashboardIcon />,
    },
    {
      text: "Posts",
      icon: <PostAddIcon />,
    },
    {
      text: "Accounts",
      icon: <ManageAccountsIcon />,
    },
  ];

  const scheduleList = [
    {
      text: "Schedule",
      icon: <ScheduleIcon />,
    },
    {
      text: "History",
      icon: <HistoryIcon />,
    },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {menuList.map(({ text, icon }, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                selected={location.pathname === `/${text.toLowerCase()}`}
                onClick={redirect(`/${text.toLowerCase()}`)}
              >
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <ScheduleSendIcon />
            </ListItemIcon>
            <ListItemText primary="Scheduling" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {scheduleList.map(({ text, icon }, index) => (
                <ListItemButton
                  selected={location.pathname === `/${text.toLowerCase()}`}
                  sx={{ pl: 4 }}
                >
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </List>
        <Divider />
      </Box>
    </Drawer>
  );
};

export default SideBar;
