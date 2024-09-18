/* eslint-disable no-unused-vars */
import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import { faTimes, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function ChatBot() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you?", sender: "bot" },
  ]);

  const chatContainerRef = useRef(null);
  const inputRef = useRef(null);

  // This is to focus on the input field when chat is opened
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [isChatOpen]);

  // This is to handle the scroll of chat element
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages, isChatOpen]);

  // Simulated bot response
  const generateBotResponse = (userMessage) => {
    const responses = [
      "I'm here to assist you!",
      "Could you please provide more details?",
      "I'm not sure, can you try again?",
      "That's a great question!",
      "Thank you for reaching out!",
    ];

    // Return a random response from the array
    return responses[Math.floor(Math.random() * responses.length)];
  };

  // This is to handle the message sending
  const handleSendMessage = () => {
    if (input.trim() === "") return;

    setIsSending(true);
    const newMessage = { text: input, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInput("");

    // Fake bot response after a short delay
    setTimeout(() => {
      const botResponse = generateBotResponse(newMessage.text);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: botResponse, sender: "bot" },
      ]);
      setIsSending(false);
    }, 1000);
  };

  // This is to handle the keydown event
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="z-20 fixed bottom-4 right-10">
      {/* This is the chat icon that will appear when chat is not opened */}
      {!isChatOpen && (
        <div
          onClick={() => setIsChatOpen(true)}
          className="flex justify-center items-center h-12 w-12 hover:cursor-pointer"
        >
          <div className="bg-eyYellow rounded-full p-3 flex justify-center items-center h-full w-full">
            <FontAwesomeIcon
              icon={faFacebookMessenger}
              style={{ color: "#747480" }}
              className="text-3xl"
            />
          </div>
        </div>
      )}

      {/* This is the chat box that will appear when chat is opened */}
      {isChatOpen && (
        <div className="fixed border border-black bottom-4 right-4 w-96 h-96 bg-white shadow-lg rounded-lg flex flex-col sm:w-full sm:h-full md:w-96 md:h-96">
          <div className="flex justify-between items-center p-3 bg-eyYellow rounded-t-lg border-b border-black">
            <h2 className="text-lg text-pageGray font-bold">Chat</h2>
            <FontAwesomeIcon
              icon={faTimes}
              className="text-lg cursor-pointer text-pageGray"
              onClick={() => setIsChatOpen(false)}
            />
          </div>

          {/* Chat messages */}
          <div className="flex-1 p-3 overflow-y-auto" ref={chatContainerRef}>
            <p>Welcome to the chat!</p>
            {messages.map((message, index) => (
              <div key={index} className="my-1">
                <div
                  className={`p-2 rounded-lg max-w-[80%] break-words ${
                    message.sender === "bot" ? " text-right ml-auto" : "  "
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          <div
            className="p-3 border-t flex gap-1 items-center"
            onKeyDown={handleKeyDown}
          >
            <input
              type="text"
              className="w-full border rounded-lg p-2 text-pageGray"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isSending}
              ref={inputRef}
            />
            <button disabled={isSending} onClick={handleSendMessage}>
              <FontAwesomeIcon icon={faPaperPlane} color="green" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatBot;
