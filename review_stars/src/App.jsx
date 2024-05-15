import React, { useState } from "react";
import Review_stars from "./component/Review_stars";

function App() {
  return (
    <>
      <div className="h-screen ">
        <h1 className="text-center text-4xl underline underline-offset-8 pt-4 font-black text-[#46756E]">
          Review Stars
        </h1>
        <div className="flex gap-6 justify-center ">
          <div className="w-1/4 mt-6 flex items-center flex-col">
            <img
              src="https://img.freepik.com/premium-psd/sci-fi-movi-poster-design_841014-23223.jpg?w=740"
              alt="spiderman"
            />
            <Review_stars no_of_stars={5} />
          </div>
          <div className="w-1/4 mt-6 flex items-center flex-col">
            <img
              src="https://img.freepik.com/premium-psd/sci-fi-movi-poster-design_841014-23221.jpg?w=740"
              alt="spiderman"
            />
            <Review_stars no_of_stars={5} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

<></>;
