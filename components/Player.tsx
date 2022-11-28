import React from "react";
import { BsPersonFill } from "react-icons/bs";

const Player = ({ player }: any) => {
  return (
    <div className="flex items-center ">
      <div
        style={{ backgroundColor: "#383531" }}
        className="sm:w-11 sm:h-11 w-6 h-6 flex items-end justify-center mr-2"
      >
        <BsPersonFill
          className="w-4 h-4 sm:w-8 sm:h-8"
          //   size="33"
          color="#BDBDBD"
        />
      </div>{" "}
      <p
        className="sm:text-md text-sm font-semibold"
        style={{ color: "#BDBDBD" }}
      >
        {player}
      </p>
    </div>
  );
};

export default Player;
