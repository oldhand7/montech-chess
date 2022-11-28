import React from "react";
import Table from "../../components/Table";

import { AiOutlinePlus } from "react-icons/ai";
import DatePicker from "../../components/DatePicker";
const Tabs = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div style={{ minHeight: "100vh" }} className="flex flex-wrap ">
        <div className="mx-auto w-10/12">
          <div className="flex justify-between sm:mb-0 mb-5">
            <div></div>
            <div className="flex flex-col sm:flex-row">
              <DatePicker />
              <button
                style={{ backgroundColor: "#438FFE" }}
                className="rounded-md flex  sm:h-12 h-8 w-44 justify-center items-center text-white sm:ml-3 sm:mt-0 mt-3 "
              >
                <AiOutlinePlus color="white" />
                <p className="ml-3 text-sm font-semibold">Create New Room</p>
              </button>
            </div>
          </div>
          <ul
            className="flex mb-0 list-none flex-wrap pt-3  flex-row mb-1"
            role="tablist"
          >
            <li className="w-26 text-center h-11 text-lg font-medium mr-4">
              <a
                className="text-xs font-bold uppercase pr-5 py-3 w-fit  rounded block leading-normal"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                available Games
              </a>
              <p
                className={openTab === 1 ? "m-0 h-1 bg-black rounded-sm" : ""}
              ></p>
            </li>
            <li className="w-26 text-center h-11 text-lg font-medium">
              <a
                className="text-xs font-bold uppercase pr-5 py-3 w-fit  rounded block leading-normal"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Unavailable Games
              </a>
              <p
                className={openTab === 2 ? "m-0 h-1 bg-black rounded-sm" : ""}
              ></p>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6  rounded">
            <div className="flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <Table openTab={openTab} />
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <Table openTab={openTab} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
