import React, { useState } from "react";
import data from "./data";
import { BiExpandAlt } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

function Accordin() {
  const [selected, setselected] = useState();
  const [multi, setMulti] = useState(false);
  const [multianswer, setMultiAnswer] = useState([]);

  function handleClick(id) {
    if (multi == false) {
      return selected === id ? setselected(null) : setselected(id);
    } else {
      let multiple = [...multianswer];
      multiple.indexOf(id) === -1
        ? multiple.push(id)
        : multiple.splice(multiple.indexOf(id), 1);

      setMultiAnswer(multiple);
    }
  }

  function handleMultiple() {
    setMulti(!multi);
    setMultiAnswer([]);
  }

  return (
    <>
      <div className="flex w-1/2 align-center justify-center m-auto  ">
        <div className="w-full overflow-y-auto h-[90vh] no-scrollbar">
          <div
            onClick={handleMultiple}
            className={`h-10 w-1/4 p-2 ${
              multi ? "bg-green-300" : "bg-red-300"
            } mb-10 text-center cursor-pointer`}
          >
            {multi ? "Enabled Multi" : "Disabled Multi"}
          </div>
          {data.map((item, key) => (
            <div
              className="flex justify-center align-center flex-col w-full text-lg font-bold"
              key={key}
            >
              <h1 className="w-full bg-amber-400 h-fit mb-3 flex p-3 rounded-xl shadow-lg justify-between">
                {item.question}{" "}
                <span
                  className=" cursor-pointer"
                  onClick={() => handleClick(item.id)}
                >
                  <BiExpandAlt size={20} />
                </span>
              </h1>

              {multi
                ? multianswer.indexOf(item.id) !== -1 && (
                    <p className="w-full bg-yellow-100 h-fit mb-3 rounded-lg shadow-lg p-3">
                      {item.answer}
                    </p>
                  )
                : selected === item.id && (
                    <p className="w-full bg-yellow-100 h-fit mb-3 rounded-lg shadow-lg p-3">
                      {item.answer}
                    </p>
                  )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Accordin;
