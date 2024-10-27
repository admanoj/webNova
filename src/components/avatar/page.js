"use client";
import { Avatar, AvatarIcon } from "@nextui-org/react";

export default function App() {
  return (
    <div className="flex items-center">
      <Avatar
        icon={<AvatarIcon className="text-black/80 w-6 h-6" />} // Icon-specific styling
        className="bg-purple-500 h-10 w-10 rounded-full flex items-center justify-center"
      />
    </div>
  );
}
