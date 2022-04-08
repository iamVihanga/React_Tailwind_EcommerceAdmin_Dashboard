import React from "react";
import { Avatar } from "@windmill/react-ui";

const ChatUserCard = ({
  avatar,
  first_name,
  last_name,
  state,
  handleClick,
}) => {
  return (
    <div
      onClick={handleClick}
      className="flex items-center my-4 transition duration-100 hover:ease-in dark:hover:bg-gray-600 hover:bg-gray-300 rounded-lg cursor-pointer"
    >
      <div className="mr-5 m-1 relative">
        {state && (
          <div className="absolute z-10 drop-shadow-lg bottom-4 left-0 ml-6 w-2 h-2 bg-green-500 rounded-full " />
        )}
        <Avatar
          className="hidden md:inline-block"
          src={avatar}
          alt="user icon"
        />
      </div>
      <div>
        <p className="text-gray-800 dark:text-gray-300 text-sm">
          {first_name} {last_name}
        </p>
      </div>
    </div>
  );
};

export default ChatUserCard;
