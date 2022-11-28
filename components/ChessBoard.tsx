import { useEffect, useState } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import Player from "./Player";

const ChessBoard = () => {
  const [game, setGame] = useState<any>(new Chess());
  const [width, setWidth] = useState<any>();
  //Let's perform a function on the game state

  function safeGameMutate(modify: any) {
    setGame((g: any) => {
      const update = { ...g };
      modify(update);
      return update;
    });
  }
  //Movement of computer
  function makeRandomMove() {
    const possibleMove = game.moves();

    //exit if the game is over

    if (game.game_over() || game.in_draw() || possibleMove.length === 0) return;
    //select random move

    const randomIndex = Math.floor(Math.random() * possibleMove.length);
    //play random move
    safeGameMutate((game: any) => {
      game.move(possibleMove[randomIndex]);
    });
  }

  //Perform an action when a piece is droped by a user

  function onDrop(source: any, target: any) {
    let move = null;
    safeGameMutate((game: any) => {
      move = game.move({
        from: source,
        to: target,
        promotion: "q",
      });
    });
    //illegal move
    if (move == null) return false;
    //valid move
    setTimeout(makeRandomMove, 200);
    return true;
  }

  const Timer = () => {
    return (
      <div
        style={{ backgroundColor: "#383531" }}
        className="rounded-md sm:w-32 w-20 sm:h-11 h-8 flex items-center justify-center"
      >
        <p className="text-white sm:text-md text-sm font-semibold">00:00:00</p>
      </div>
    );
  };
  useEffect(() => {
    const width = window.innerWidth;
    setWidth(width);
  }, []);
  console.log(width);
  return (
    <div className="chess-room">
      <div className="flex items-center justify-between mb-6">
        <Player player="Opponent" />
        <Timer />
      </div>

      {/* <Chessboard position={game.fen()} onPieceDrop={onDrop} /> */}
      <Chessboard
        boardWidth={
          width > 990 ? 600 : width > 768 ? 400 : width > 576 ? 300 : 200
        }
        position={game.fen()}
        onPieceDrop={onDrop}
      />
      <div className="flex items-center justify-between mt-6">
        <Player player="My Avatar" />
        <Timer />
      </div>
    </div>
  );
};

export default ChessBoard;
