import Link from "next/link";
import { useState } from "react";

const Modal = ({ openTab, showModal, setShowModal }: any) => {
  // const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* <div className="flex items-center justify-center "> */}
      {/* <button
        disabled={openTab === 2}
        style={{ backgroundColor: openTab === 2 ? "#BFBFBF" : "#438FFE" }}
        className="text-xs font-semibold xl:w-32 lg:w-28 md:w-20 sm:w-20 w-20 rounded-lg text-white h-10"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open Modal
      </button> */}
      {/* </div> */}
      {showModal ? (
        <>
          <div className="backdrop-blur-sm fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-20"
              onClick={() => setShowModal(false)}
            ></div>
            <div className=" flex items-center justify-between min-h-screen px-10 py-8">
              <div
                style={{
                  // width: "495px",
                  boxSizing: "border-box",
                  height: "365px",
                }}
                className="sm:w-10/12 w-full relative  max-w-lg p-7 mx-auto bg-white rounded-md shadow-lg"
              >
                <h1 className="text-lg font-medium text-black font-bold">
                  Create New Room
                </h1>
                <div className="text-left">
                  <div className="mt-6 mb-2">
                    <label className="font-bold text-sm" htmlFor="currency">
                      Entry Fee
                    </label>
                    <br />
                    <select
                      className=" w-full border-2 rounded-md h-10 px-4 py-1 mt-2"
                      name="currency"
                      // style={{ width: "438px" }}
                      id="currency"
                    >
                      <option value="volvo">0.003 ETH</option>
                      <option value="volvo">0.005 ETH</option>
                      <option value="volvo">0.007 ETH</option>
                    </select>
                  </div>
                  <div className="mt-6 mb-2">
                    <label className="font-bold text-sm" htmlFor="currency">
                      Room Privacy
                    </label>
                    <br />
                    <select
                      className=" w-full border-2 rounded-md h-10 px-4 py-1 mt-2"
                      name="currency"
                      // style={{ width: "438px" }}
                      id="currency"
                    >
                      <option value="volvo">Public</option>
                      <option value="volvo">Private</option>
                    </select>
                  </div>
                  <div className="items-center  mt-10 flex justify-end">
                    <button
                      style={{
                        backgroundColor: "transparent",
                        width: "76px",
                        border: "1px solid #929292",
                      }}
                      className="h-8 mr-4 box-border mt-2   text-gray-600 rounded-md text-sm font-semibold  outline-none border-gray-600 "
                      onClick={() => setShowModal(false)}
                    >
                      Cancel
                    </button>
                    <Link
                      href="/games/joined-game"
                      style={{ backgroundColor: "#438FFE", width: "73px" }}
                      className="h-8 box-border  mt-2 flex justify-center  items-center  text-white text-sm font-semibold rounded-md outline-none ring-offset-2  focus:ring-2"
                      onClick={() => setShowModal(false)}
                    >
                      Save
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
