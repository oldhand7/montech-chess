import Link from "next/link";
import React from "react";
import ChessBoard from "../../../components/ChessBoard";
import { SlArrowLeft } from "react-icons/sl";

const index = () => {
  return (
    <div className="flex  sm:items-start items-center sm:flex-row flex-col justify-between pb-10 mx-auto w-10/12">
      <div className="flex justify-center items-center mt-2 sm:mb-0 mb-5 relative right-16">
        <SlArrowLeft className="text-white mr-3" size="10" />
        <Link className="font-bold text-white text-sm" href="/games">
          Go Back
        </Link>
      </div>
      <ChessBoard />;
    </div>
  );
};

export default index;
