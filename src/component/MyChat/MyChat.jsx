import "./MyChat.css";

import { Box, InputBase } from "@mui/material";
import { useState, useEffect } from "react";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import axios from "axios";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import SettingsIcon from "@mui/icons-material/Settings";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import StoriesIcon from "@mui/icons-material/DataUsage";
import AnimationIcon from "@mui/icons-material/Toll";
import PestControlIcon from "@mui/icons-material/PestControl";
import AIcon from "@mui/icons-material/FontDownload";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import EditIcon from "@mui/icons-material/Edit";
import Chats from "../ChatContainer/Chats";

const MyChat = () => {
  const [theme, setTheme] = useState("light");
  const [chats, setChats] = useState([]);

  const getAllChats = async () => {
    try {
      const data = await axios.get(
        "https://devapi.beyondchats.com/api/get_all_chats?page=1"
      );
      setChats(data?.data?.data?.data);
      console.log(data?.data?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllChats();
    console.log(chats);
  }, []);

  const data1 = [
    {
      id: 1,
      img: "",
      name: "Telegram",
      msg: "Telegram Joined Telegram",
      time: "00:05",
    },
    {
      id: 2,
      img: "",
      name: "Arjun Devendra",
      msg: "Arjun Joined Telegram",
      time: "May 15",
    },
    {
      id: 3,
      img: "",
      name: "Karan Devendra",
      msg: "Karan Joined Telegram",
      time: "00:05",
    },
  ];

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      p={2}
      bgcolor={theme === "dark" ? "black" : "white"}
      width={"25%"}
      borderRadius={"lg"}
      borderWidth={"1px"}
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        width={"100%"}
        // position={"fixed"}
      >
        <Button
          id="fade-button"
          aria-controls={open ? "fade-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <MenuIcon sx={{ color: "black" }} />
        </Button>

        <Box
          display={"flex"}
          width={"100%"}
          alignItems={"center"}
          borderRadius={"20px"}
          borderColor={theme === "dark" ? "black" : "white"}
          sx={{
            border: "1px solid black",
          }}
        >
          <IconButton>
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search"
            inputProps={{ "aria-label": "search google maps" }}
          />
        </Box>
      </Box>

      <Box className="scroll-container">
        {chats
          ? chats.map((d) => (
              <Box key={d?.id}>
                <Chats data={d} />
              </Box>
            ))
          : ""}
      </Box>

      <Box
        bgcolor={"#0088cc"}
        borderRadius={"50px"}
        width={"50px"}
        height={"50px"}
        sx={{ bottom: 50, left: 320 }}
        position={"fixed"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <EditIcon />
      </Box>

      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        className="glass"
      >
        <MenuItem onClick={handleClose} className="gap">
          <BookmarkIcon />
          Saved Message
        </MenuItem>
        <MenuItem onClick={handleClose} className="gap">
          <StoriesIcon />
          My Stories
        </MenuItem>
        <MenuItem onClick={handleClose} className="gap">
          <PermIdentityIcon />
          Contact
        </MenuItem>
        <MenuItem onClick={handleClose} className="gap">
          <SettingsIcon />
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose} className="gap">
          <ModeNightIcon />
          Dark Mode
        </MenuItem>
        <MenuItem onClick={handleClose} className="gap">
          <AnimationIcon />
          Animations
        </MenuItem>
        <MenuItem onClick={handleClose} className="gap">
          <HelpOutlineIcon />
          Telegram Features
        </MenuItem>
        <MenuItem onClick={handleClose} className="gap">
          <PestControlIcon />
          Report Bug
        </MenuItem>
        <MenuItem onClick={handleClose} className="gap">
          <AIcon />
          Switch to A version
        </MenuItem>
        <MenuItem onClick={handleClose} className="gap">
          <ControlPointIcon />
          Install App
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default MyChat;
