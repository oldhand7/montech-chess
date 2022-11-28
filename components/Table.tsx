import Link from "next/link";
import React, { useState } from "react";
import Modal from "./Modal";

const Table = ({ openTab }: any) => {
  const [showModal, setShowModal] = useState(false);

  const OpenModal = ({ setShowModal }: any) => {
    return (
      <button
        disabled={openTab === 2}
        style={{
          backgroundColor: openTab === 2 ? "#BFBFBF" : "#438FFE",
        }}
        className="text-xs font-semibold xl:w-32 lg:w-28 md:w-20 sm:w-20 w-20 rounded-lg text-white h-10"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open Modal
      </button>
    );
  };

  return (
    <div
      style={{ backgroundColor: "#FBFBFB" }}
      className="lg:pl-10 pl-6 pt-6 pr-6 py-6 overflow-x-auto "
    >
      <table style={{}} className="text-left table-fixed md:table-auto w-full">
        <thead className="pb-16">
          <tr>
            <th
              className="text-sm font-semibold h-5  xl:w-14 md:20 sm:20"
              style={{
                color: "#929292",
                width: "130px",
              }}
            >
              GAMEID
            </th>
            <th
              className="text-sm font-semibold h-5 xl:w-14 md:20 sm:20"
              style={{
                color: "#929292",
                width: "130px",
              }}
            >
              LIMIT
            </th>
            <th
              className="text-sm font-semibold h-5 xl:w-16 md:20 sm:20"
              style={{
                color: "#929292",
                width: "150px",
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "pre",
              }}
            >
              ENTRY FEE
            </th>
            <th
              className="text-sm font-semibold h-5 lg:w-18 md:w-30 xl:w-20"
              style={{
                color: "#929292",
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "pre",
                width: "200px",
              }}
            >
              NO. OF PLAYERS
            </th>
            <th
              className="text-sm font-semibold h-5 lg:w-18 md:w-30 xl:w-20"
              style={{
                color: "#929292",
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "pre",
                width: "200px",
              }}
            >
              DATE CREATED
            </th>
            <th
              className="text-sm font-semibold h-5   xl:4/5 lg:w-1/12 md:w-12"
              style={{ color: "#929292", width: "180px" }}
            ></th>
          </tr>
        </thead>
        <tbody className="w-full">
          <tr className="">
            <td className="h-14 w-fit">28</td>
            <td className="h-14 w-fit">2</td>
            <td className="h-14 w-fit">0.5 ETH</td>
            <td className="h-14 w-fit">0</td>
            <td className="h-14 w-fit">04/04/2022</td>
            <td className="h-14 w-fit flex">
              <OpenModal setShowModal={setShowModal} />
              <Link
                href="/games/spectate"
                style={{ border: "1px solid #438FFE", color: "#438FFE" }}
                className="flex items-center justify-center  ml-4 text-xs font-semibold xl:w-32 lg:w-28 md:w-20 sm:w-20 w-20 rounded-lg text-white h-10"
              >
                Spectate
              </Link>
            </td>
          </tr>
          <tr className="">
            <td className="h-14 w-fit">28</td>
            <td className="h-14 w-fit">2</td>
            <td className="h-14 w-fit">0.5 ETH</td>
            <td className="h-14 w-fit">0</td>
            <td className="h-14 w-fit">04/04/2022</td>
            <td className="h-14 w-fit flex">
              <OpenModal setShowModal={setShowModal} />
              <Link
                href="/games/spectate"
                style={{ border: "1px solid #438FFE", color: "#438FFE" }}
                className="flex items-center justify-center ml-4 text-xs font-semibold xl:w-32 lg:w-28 md:w-20 sm:w-20 w-20 rounded-lg text-white h-10"
              >
                Spectate
              </Link>
            </td>
          </tr>
          <tr className="">
            <td className="h-14 w-fit">28</td>
            <td className="h-14 w-fit">2</td>
            <td className="h-14 w-fit">0.5 ETH</td>
            <td className="h-14 w-fit">0</td>
            <td className="h-14 w-fit">04/04/2022</td>
            <td className="h-14 w-fit flex">
              <OpenModal setShowModal={setShowModal} />
              <Link
                href="/games/spectate"
                style={{ border: "1px solid #438FFE", color: "#438FFE" }}
                className="flex items-center justify-center ml-4 text-xs font-semibold xl:w-32 lg:w-28 md:w-20 sm:w-20 w-20  rounded-lg text-white h-10"
              >
                Spectate
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
      <Modal
        openTab={openTab}
        setShowModal={setShowModal}
        showModal={showModal}
      />
    </div>
  );
};

export default Table;
