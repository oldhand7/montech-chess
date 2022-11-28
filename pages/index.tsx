import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import coinbase from "../public/assets/coinbase.png";
import metamask from "../public/assets/metamask.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connectAccount } from "../features/accountSlice";
import { loadConfig } from "../features/configSlice";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const dispatch: any = useDispatch();
  const account = useSelector((state: any) => state.account);
  const config = useSelector((state: any) => state.config);
  const router = useRouter();

  function onWalletListItemClick(walletType: any) {
    return ({ target }: any) => {
      if (!account.connected) {
        dispatch(connectAccount(walletType));
      } else {
        alert("Disconnet from connected wallet");
      }
      // if (account.connected) {
      router.push("/games");
      // }
      target.parentElement.parentElement.removeAttribute("open");
    };
  }
  useEffect(() => {
    dispatch(loadConfig());
    // if (account) {
    //   router.push("/games");
    // }
  }, [dispatch, config, account]);
  console.log(config);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="sm:mt-16 mt-10 relative flex min-h-screen flex-col items-center justify-start py-2">
        {/* <Navbar /> */}
        <h1 className="lg:text-5xl md:text-4xl  sm:text-2xl font-bold">
          Welcome to Chess Games
        </h1>
        <small className="font-normal text-gray-700/[.8]  text-current text-xs mt-1.5">
          Sign in with your wallet to be able to authenticate and play games
        </small>
        <div className="sm:mt-16  mt-10 flex flex-col">
          <button
            onClick={onWalletListItemClick("metamask")}
            // href="/games"
            style={{
              backgroundColor: "#438FFE",
              borderRadius: "30px",
            }}
            className="w-72 sm:w-96 relative items-center justify-center flex text-white sm:h-16 h-12 py-4  font-semibold   text-lg"
          >
            <Image
              width="26"
              height="24"
              className="absolute sm:left-10 left-6"
              src={metamask}
              alt=""
            />
            <p className="text-sm sm:text-lg">Sign in with metamask</p>
          </button>
          <button
            onClick={onWalletListItemClick("coinbase")}
            style={{
              backgroundColor: "transparent",
              border: "1px solid gray",
              borderRadius: "30px",
            }}
            className="relative items-center justify-center flex sm:h-16 h-12  py-4  font-semibold mt-6 text-lg"
          >
            <Image
              className="absolute  w-6 h-6 sm:left-10 left-6"
              src={coinbase}
              alt=""
            />
            <p className="text-sm sm:text-lg">Sign in with Coinbase Wallet</p>
          </button>
        </div>
        <p className="sm:text-lg sm:mt-9 mt-5 font-semibold underline text-sm">
          Show more options
        </p>
      </div>
    </>
  );
};

export default Home;
