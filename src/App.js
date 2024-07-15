import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ChatPage from "./pages/home/ChatPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ChatPage />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
