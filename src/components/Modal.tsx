import type { ReactNode } from "react";

interface Props {
  isOpen: boolean;
  children: ReactNode;
}

export const Modal = ({ children, isOpen }: Props) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm transition-opacity duration-300 z-50 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div
        className={`w-[40%] max-h-[80vh] bg-white p-8 rounded-lg shadow-lg transform transition-all duration-500 ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};
