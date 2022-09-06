import { useState } from "react";
import logoHeader from "../../../assets/images/logo.svg";
import { styled, useTheme } from "@mui/material/styles";
import {
  ListItem,
  IconButton,
  Box,
  Drawer,
  CssBaseline,
  Toolbar,
  List,
  Typography,
  Divider,
  Button,
} from "@mui/material";

import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HomeIcon from "@mui/icons-material/Home";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import PersonIcon from "@mui/icons-material/Person";
import InfoIcon from "@mui/icons-material/Info";
import GroupAddIcon from "@mui/icons-material/GroupAdd";

import ListItemIcon from "@mui/material/ListItemIcon";
import { BiSearchAlt } from "react-icons/bi";
import { IoPersonCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function DrawerBar() {
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [openInput, setOpenInput] = useState(false);

  const pagesBar = [
    {
      text: "Home",
      icon: <HomeIcon sx={{ color: "#9d45e2" }} />,
      path: "/dashboard",
    },
    {
      text: "Movies",
      icon: <SlideshowIcon sx={{ color: "#9d45e2" }} />,
      path: "/movie",
    },
    {
      text: "Profile",
      icon: <PersonIcon sx={{ color: "#9d45e2" }} />,
      path: "/Profile",
    },
    {
      text: "Add Friends+",
      icon: <GroupAddIcon sx={{ color: "#9d45e2" }} />,
    },
    {
      text: "About Us",
      icon: <InfoIcon sx={{ color: "#9d45e2" }} />,
      path: "/About",
    },
  ];

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{
          flexDirection: "row",
          alignItems: "center",
          gap: "1rem",
          backgroundColor: "#171617",
          color: "rgba(176, 75, 255, 1)",
        }}
        className="container-box"
      >
        <Toolbar
          sx={{
            width: `5%`,
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            width: "85%",
          }}
          className="title-team-logo"
        >
          <img src={logoHeader} alt="logo" className="logoImage" />
        </Typography>
        {openInput ? (
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <input className="input-search" />
          </motion.div>
        ) : (
          <></>
        )}
        <Button
          color="inherit"
          sx={{
            width: "8%",
            borderRadius: "50%",
          }}
          onClick={() => setOpenInput(!openInput)}
        >
          <BiSearchAlt className="lupa-search" />
        </Button>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#282727",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawHeader
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              color: "#fff",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <IoPersonCircleSharp className="perfil" />
            <p>Nome</p>
          </Box>
          <IconButton onClick={handleDrawerClose} sx={{ color: "#9d45e2" }}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawHeader>
        <Divider sx={{ backgroundColor: "#9d45e2" }} />
        <List>
          {pagesBar.map((elem, i) => (
            <ListItem
              key={elem.text}
              button
              sx={{
                color: "#9d45e2",
              }}
              onClick={() => {
                if (elem.path) {
                  navigate(elem.path);
                } else {
                }
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: "35px",
                }}
              >
                {elem.icon}
              </ListItemIcon>
              <p>{elem.text}</p>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Main open={open}>
        <DrawHeader />
      </Main>
    </Box>
  );
}
// function onSubmit(page: string) {
//     console.log(page)
//     if (page === 'Home') {
//         console.log('home')
//     } else if (page === 'Movies') {
//         console.log('movie')
//     } else if (page === 'Profile') {
//         console.log('profile')
//     } else if (page === 'About Us') {
//         console.log('about')
//     }
// }
