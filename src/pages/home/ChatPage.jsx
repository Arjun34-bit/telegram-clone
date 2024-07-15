import { Box } from "@mui/material";
import MyChat from "../../component/MyChat/MyChat";
import ChatBox from "../../component/ChatBox/ChatBox";

const ChatPage = () => {
  return (
    <div>
      <Box
        display={"flex"}
        justifyContent={"center"}
        w={"100%"}
        height={"100vh"}
        padding={"0"}
        color={"white"}
      >
        <MyChat />
        <ChatBox />
      </Box>
    </div>
  );
};

export default ChatPage;
