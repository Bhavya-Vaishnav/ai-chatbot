import "./chatPage.css";
import NewPrompt from "../../components/newPrompt/NewPrompt";

const ChatPage = () => {
  return (
    <div className="chatPage">
      <div className="wrapper">
        <div className="chat">
          <div className="message">Text message from AI</div>
          <div className="message user">Text message from user lorem35</div>
          <div className="message">Text message from AI</div>
          <div className="message user">Text message from user</div>
          <div className="message">Text message from AI</div>
          <div className="message user">Text message from user</div>
          <div className="message">Text message from AI</div>
          <div className="message user">Text message from user</div>
          <div className="message">Text message from AI</div>
          <div className="message user">Text message from user</div>
          <div className="message">Text message from AI</div>
          <div className="message user">Text message from user</div>
          <div className="message">Text message from AI</div>
          <div className="message user">Text message from user</div>
          <div className="message">Text message from AI</div>
          <div className="message user">Text message from user</div>
          <NewPrompt />
        </div>
        
      </div>
    </div>
  );
};

export default ChatPage;
