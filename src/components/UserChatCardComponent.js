import React from "react";

export default function UserChatCardComponent({ user }) {
  return (
    <div href="#" className="flex-shrink-0 group block pt-6 px-10 ">
      <div className="flex items-center">
        <div>
          <span className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-green-500">
            <span className="text-xl font-medium leading-none text-white capitalize">
             {user.name.substring(0,1)}
            

            </span>
          </span>
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
            {user.name}
          </p>
        </div>
      </div>
    </div>
  );
}
