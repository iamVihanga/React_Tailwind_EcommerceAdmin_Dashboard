import React from "react";
import { Card, CardBody, Label, Badge } from "@windmill/react-ui";

const ChatSection = ({ messages }) => {
  return (
    <div className="mt-3 mb-8 mr-4">
      <Card className="shadow-md relative h-screen">
        <CardBody>
          {messages.map((message, id) => (
            <div>
              <div
                key={id}
                className={`absolute block
                ${
                  message.flag === "from_client"
                    ? "left-0 ml-8"
                    : message.flag === "to_client"
                    ? "right-0 mr-8"
                    : ""
                }`}
              >
                <Badge
                  type={message.flag === "from_client" ? "neutral" : "success"}
                >
                  <p className="text-sm m-3">{message.text}</p>
                </Badge>
              </div>
              <br />
              <br />
            </div>
          ))}
        </CardBody>
      </Card>
      <div className="bottom-0">
        <Label className="">
          <div className="relative text-gray-500 focus-within:text-purple-600">
            <input
              className="block w-full pr-20 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
              placeholder="Type your message here"
            />
            <button className="absolute inset-y-0 right-0 px-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-r-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
              Send
            </button>
          </div>
        </Label>
      </div>
    </div>
  );
};

export default ChatSection;
