import Link from "next/link";
import React from "react";
import ChessBoard from "../../../components/ChessBoard";
import { SlArrowLeft } from "react-icons/sl";

const index = () => {
  return (
    <div className="flex flex-col items-center justify-between pb-10 mx-auto w-10/12">
      <div className="flex justify-start items-center mb-10 mt-3 w-full relative left-0">
        <div className="flex justify-center items-center mt-2 absolute left-0">
          <SlArrowLeft className="text-white mr-3" size="10" />
          <Link className="font-bold text-white text-sm" href="/games">
            Go Back
          </Link>
        </div>
        <h1 className="font-bold text-white sm:text-2xl text- w-fit mx-auto">
          SPECTATING
        </h1>
      </div>
      <ChessBoard />;
    </div>
  );
};

export default index;
