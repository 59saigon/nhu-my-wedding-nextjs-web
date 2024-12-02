import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { toggleChat } from "@/lib/slices/chatSlice";

const ChatButton = memo(() => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.chat.isOpen);

  const handleClick = () => {
    dispatch(toggleChat());
  };

  return (
    <button onClick={handleClick} className="relative rounded-full">
      <span className="z-10">Chat with me</span>
      <span className="absolute inline-flex h-full w-full rounded-full inset-0 bg-accent animate-ping z-0"></span>
    </button>
  );
});

export default ChatButton;
