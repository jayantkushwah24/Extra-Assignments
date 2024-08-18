import "./App.css";
import { RenderChatData } from "./Components/RenderChatData6";
import { Comments } from "./Components/RenderComments7";
import { RenderUserProduct } from "./Components/RenderProduct2";
import { RenderUserData } from "./Components/RenderUserData5";
import { RenderUserProfile } from "./Components/RenderUserProfile4";
import { RenderUser } from "./Components/RenderUsers1";

function App() {
  return (
    <>
      {/* <RenderUser /> */}
      {/* <RenderUserProduct /> */}
      {/* <RenderUserProfile heading={"User Profile"} h={"400px"} w={"300px"} /> */}
      {/* <RenderUserData /> */}
      {/* <RenderChatData /> */}
      <Comments />
    </>
  );
}

export default App;
