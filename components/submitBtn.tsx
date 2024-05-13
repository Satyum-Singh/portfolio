import React from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitBtn() {
  return (
    <div>
      <button
        className="group focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all flex items-center justify-center gap-2"
        type="submit"
      >
        Submit{" "}
        <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 text-xs opacity-70 transition-all" />{" "}
      </button>
    </div>
  );
}
