import React, { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { signOutUser } from "../../services/firebaseService";
import MainButton from "../MainButton";

function MainModal({ closeModal, ...props }) {
  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => (document.body.style.overflowY = "unset");
  }, []);
  const { timer } = useContext(AppContext);
  return (
    <div className="relative z-30" id="modal">
      <div
        className="h-screen w-screen bg-[#333] opacity-[0.6] fixed z-30 top-0 left-0"
        // onClick={closeModal}
      ></div>
      <div
        className="h-[220px] w-[600px] bg-[#fff] z-40 fixed top-[200px] left-0 right-0 mx-auto rounded-3xl flex justify-center items-center flex-col"
        style={{
          boxShadow: "rgba(249, 200, 2, 0.24) 0px 4px 10px 1px",
        }}
      >
        <p className=" w-[400px] text-center text-[50px] font-bold text-red-700">
          Game Over!
        </p>
        <p className="mb-[20px] text-red-900 text-[12px]">
          You have stepped over the enemy!
        </p>
        <div className="flex">
          <MainButton onClick={() => window.location.reload()} label="Replay" />
          <div className="w-[10px]" />
          <MainButton onClick={signOutUser} label="Logout" />
        </div>
      </div>
    </div>
  );
}

export default MainModal;
