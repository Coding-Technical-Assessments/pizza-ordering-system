"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { adminRoutes, userRoutes } from "./routes";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/context/app";
import { Button, IconButton, useTheme } from "@mui/material";
import { Logout, ShoppingCart } from "@mui/icons-material";

const drawerWidth = 240;

const UserLayout = ({ children }) => {
  const { setSpinner } = useAppContext();

  const router = useRouter(); // Get the router instance

  const navigateTo = (path) => {
    setSpinner(true);
    router.push(path); // Use router.push to navigate
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Joe's Pizza Shop
          </Typography>

          <IconButton sx={{ mr: 3 }}>
            <ShoppingCart />
          </IconButton>

          <Divider orientation="vertical" sx={{ width: 3 }} />

          <Button
            endIcon={<Logout />}
            size="small"
            variant="contained"
            sx={{ bgcolor: useTheme().palette.error.main }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>

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
            {adminRoutes.map((route, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton onClick={() => navigateTo(route.path)}>
                  <ListItemIcon>{route.icon}</ListItemIcon>
                  <ListItemText primary={route.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider />

          <List>
            {userRoutes.map((route, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton onClick={() => navigateTo(route.path)}>
                  <ListItemIcon>{route.icon}</ListItemIcon>
                  <ListItemText primary={route.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default UserLayout;
