import "./ChatBox.css";

import * as React from "react";
import {
  Avatar,
  Box,
  Button,
  FormControl,
  IconButton,
  Input,
  InputBase,
  Tooltip,
  Typography,
} from "@mui/material";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";

import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";

import NotificationsOffIcon from "@mui/icons-material/NotificationsOff";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import LockIcon from "@mui/icons-material/Lock";
import DeleteIcon from "@mui/icons-material/Delete";

const ChatBox = () => {
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
      alignItems="center"
      flexDirection="column"
      p={0}
      bgcolor={"white"}
      width={"75%"}
      borderRadius="lg"
      borderWidth="1px"
      color={"black"}
      className="bg-image"
    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"100%"}
        height={"70px"}
        bgcolor={"white"}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          width={"100%"}
          bgcolor={"white"}
          gap={1}
          padding={1}
          minHeight={"20px"}
          marginRight={"95px"}
        >
          <Avatar
            alt=""
            src=""
            sx={{ bgcolor: "#0088cc", width: 48, height: 48 }}
          >
            T
          </Avatar>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box display={"column"}>
              <Typography color={"black"} textAlign={"start"} fontWeight={600}>
                Telegram
              </Typography>
              <Typography color={"grey"} fontWeight={100}>
                Service Notification
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={2}
          marginRight={"10px"}
        >
          <SearchIcon />
          <Button
            id="fade-button"
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MoreVertIcon />
          </Button>
        </Box>
      </Box>

      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        mt={"550px"}
        width={"75%"}
        padding={1}
        borderRadius={"15px"}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          color={"white"}
          bgcolor={"white"}
          width={"60%"}
          padding={1.5}
          borderRadius={"15px"}
        >
          <EmojiEmotionsIcon sx={{ color: "black" }} />
          <InputBase
            sx={{ ml: "3px", width: "440px" }}
            placeholder="Message..."
            inputProps={{ "aria-label": "search google maps" }}
          />
          <AttachFileIcon sx={{ color: "white" }} />
        </Box>
        <Box
          bgcolor={"#0088cc"}
          borderRadius={"50px"}
          width={"50px"}
          height={"50px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          ml={1}
        >
          <KeyboardVoiceIcon sx={{ color: "white" }} />
        </Box>
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
      >
        <MenuItem onClick={handleClose} className="gap">
          <NotificationsOffIcon />
          Mute
        </MenuItem>
        <MenuItem onClick={handleClose} className="gap">
          <CheckCircleOutlineIcon />
          Selected Messages
        </MenuItem>
        <MenuItem onClick={handleClose} className="gap">
          <PersonAddAltIcon />
          Add to Contact
        </MenuItem>
        <MenuItem onClick={handleClose} className="gap">
          <LockIcon />
          Block User
        </MenuItem>
        <MenuItem onClick={handleClose} className="gap" color={"red"}>
          <DeleteIcon sx={{ color: "red" }} />
          <span style={{ color: "red" }}>Delete Chat</span>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default ChatBox;
