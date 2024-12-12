import { HiOutlineX } from "react-icons/hi";
import useOutsideClick from "../hooks/useOutsideClick";

/* eslint-disable react/prop-types */
export default function Modal({ open, onClose, title, children }) {
  const ref = useOutsideClick(onClose);
  return (
    open && (
      <div className="backdrop-blur-sm fixed w-full h-screen top-0 left-0 bg-secondary-800 bg-opacity-30 z-50">
        <div
          ref={ref}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                    rounded-lg bg-secondary-0 p-4 shadow-lg transition-all duration-500 ease-out
                    w-[calc(100vw-2rem)] md:max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto" /*this line can be helpful beacuse using 
                    calc function and handel wide and full with this function  */
        >
          <div className="flex items-center justify-between border-b border-b-secondary-300 pb-2 mb-6">
            <p className="text-secondary-700 font-bold text-base">{title}</p>
            <button>
              <HiOutlineX
                className="w-5 h-5 text-secondary-500"
                onClick={() => {
                  onClose();
                }}
              />
            </button>
          </div>
          {children}
        </div>
      </div>
    )
  );
}
