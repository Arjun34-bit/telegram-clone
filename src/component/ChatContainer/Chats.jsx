import axios from "axios";
import "./Chats.css";
import { Avatar, Box, Typography } from "@mui/material";
import { ChatState } from "../../context/ChatProvider";
import { useState } from "react";

const Chats = ({ data }) => {
  // const { selectedChat, setSelectedChat } = ChatState();
  const [selectedChat, setSelectedChat] = useState();
  const handleChat = async (id) => {
    const result = await axios.get(
      `https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${id}`
    );
    setSelectedChat(result?.data);
    console.log(selectedChat);
  };
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      width={"100%"}
      bgcolor={selectedChat ? "#0088cc" : "white"}
      gap={1}
      padding={1}
      minHeight={"20px"}
      className={"hov"}
      marginRight={"95px"}
      onClick={() => handleChat(data?.id)}
      borderRadius={"10px"}
      // sx={{ overflowY: "hidden" }}
    >
      <Avatar
        alt={data?.creator?.name}
        src=""
        sx={{ bgcolor: "#0088cc", width: 56, height: 56 }}
      >
        {data?.creator?.name?.[0]}
      </Avatar>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box display={"column"}>
          <Typography
            color={selectedChat ? "#ffff" : "black"}
            textAlign={"start"}
            fontWeight={600}
          >
            {data?.creator?.name}
          </Typography>
          <Typography color={selectedChat ? "#ffff" : "grey"} fontWeight={100}>
            {data?.creator?.name} Joined Telegram
          </Typography>
        </Box>
        <Box>
          <Typography
            display={"col"}
            // justifyContent={"flex-end"}
            color={"gray"}
            marginLeft={"50px"}
            marginBottom={"20px"}
            marginRight={"5px"}
            fontSize={"15"}
          >
            {data?.time}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Chats;
