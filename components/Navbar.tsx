import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import pawn from "../public/assets/pawn.png";
import { useDispatch, useSelector } from "react-redux";
import { BigNumber, utils } from "ethers";
import Link from "next/link";

export const formatAddress = (address: any, padding = 4) => {
  if (address && address.length > 0) {
    return `${address.substr(0, padding + 2)}…${address.substr(padding * -1)}`;
  } else {
    return address;
  }
};
export const formatBalance = (balanceInWei: any) => {
  return parseFloat(utils.formatEther(BigNumber.from(balanceInWei))).toFixed(4);
};

const Navbar = () => {
  const config = useSelector((state: any) => state.config);
  const account = useSelector((state: any) => state.account);
  const dispatch: any = useDispatch();

  const router = useRouter();
  const pathname = router.pathname;
  const pathname1 = "/games/joined-game";
  const pathname2 = "/games/spectate";
  return (
    <div
      style={{
        borderBottom:
          pathname === pathname1 || pathname === pathname2
            ? "1px solid #5B5953"
            : "1px solid #EBEBEB",
      }}
      className="mb-6 box-border  py-6 flex justify-between items-center sm:flex-row flex-col mx-auto w-10/12 "
    >
      <div className="flex justify-start items-center ">
        <Link className="flex justify-center items-center" href="/games">
          <p
            className={
              pathname === pathname1 || pathname === pathname2
                ? "text-white text-lg font-bold"
                : "text-black text-lg font-bold"
            }
          >
            CHESS
          </p>
          <Image className="mx-1" width="32" height="32" src={pawn} alt="" />
          <p
            className={
              pathname === pathname1 || pathname === pathname2
                ? "text-white text-lg font-bold"
                : "text-black text-lg font-bold"
            }
          >
            GMAES
          </p>
        </Link>
      </div>
      {pathname === "/" ? (
        <div></div>
      ) : (
        <div className="sm:mt-0 mt-5">
          <button
            style={{ backgroundColor: "#438FFE" }}
            className="font-semibold text-sm text-white sm:h-12 sm:w-24 rounded-tl rounded-bl h-8 w-20"
          >
            {account.connected
              ? formatBalance(account.balance) + " ETH"
              : "0.04 ETH"}
          </button>
          <button className="font-semibold text-sm text-black bg-white sm:h-12 sm:w-44 h-8 w-28 rounded-tr rounded-br">
            {account.connected
              ? formatAddress(account.address)
              : "d0xa41...91214"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
