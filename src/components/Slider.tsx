import { useState } from "react";
import { useStore } from "@nanostores/react";
import { isMenuOpen } from "./MenuStore";

export const Slider = () => {
  const $isMenuOpen = useStore(isMenuOpen);
  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black transition-opacity duration-500 ease-in-out 
        ${$isMenuOpen ? "opacity-50" : "opacity-0 pointer-events-none"}`}
        onClick={() => isMenuOpen.set(false)}
      />
      <aside
        className={`text-xl text-white bg-[#FFF] w-[319px] h-full top-0 right-0 z-50 fixed p-10 flex flex-col gap-4
    transform opacity-100 border-l-4
    transition-all duration-700 ease-in-out
    ${
      $isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
    }`}
        onClick={(e) => e.stopPropagation()}
      >
        <a
          href={"#"}
          className="hover:text-green-cumtual transition-colors duration-200 delay-100 cursor-pointer ease-in-out"
        >
          Nosotros
        </a>
        <a
          href={"#"}
          className="hover:text-green-cumtual transition-colors duration-200 delay-100 cursor-pointer ease-in-out mt-4"
        >
          Anuncios
        </a>
        <a
          href={"#"}
          className="hover:text-green-cumtual transition-colors duration-200 delay-100 cursor-pointer ease-in-out mt-4"
        >
          Blog
        </a>
        <a
          href={"#"}
          className="hover:text-green-cumtual transition-colors duration-200 delay-100 cursor-pointer ease-in-out mt-4"
        >
          Contacto
        </a>
      </aside>
    </>
  );
};
