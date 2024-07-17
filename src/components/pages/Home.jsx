import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-[80dvh] flex flex-col justify-center items-center text-lg">
      <Link
        to={"eu-ai-act"}
        className="w-80 h-40 bg-fuchsia-600 flex justify-center items-center text-2xl font-bold hover:bg-fuchsia-500">
        go to eu ai act
      </Link>
      Diese Seite muss noch entworfen werden
    </div>
  );
};

export default Home;
