import React, { useState } from "react";
import Join from "./Join";
import ReactModal from "react-modal";

export const StartButton = () => {
  const [modal, setModal] = useState(false);

  const waitlist = false;

  return (
    <div>
      {modal ? <Join email="" modal={modal} setModal={setModal} /> : null}
      {waitlist ? (
        <button
          onClick={() => setModal(true)}
          className="bg-hotpink-500 hover:bg-hotpink-600 w-32 p-4 font-bold rounded-lg text-center"
        >
          Join Beta
        </button>
      ) : (
        <button className=" p-4 ">
          <a
            className="bg-hotpink-500 hover:bg-hotpink-600 w-34 p-4 font-bold rounded-lg text-center"
            href="https://act.roley.me"
          >
            Start Free
          </a>
        </button>
      )}
    </div>
  );
};
