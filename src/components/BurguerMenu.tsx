import { useStore } from "@nanostores/react";
import { isMenuOpen } from "./MenuStore";

export const BurguerMenu = () => {
  const $isMenuOpen = useStore(isMenuOpen);

  return (
    <button
      className="relative z-50 flex flex-col justify-between w-[24px] h-[16px] cursor-pointer bg-transparent border-none outline-none group"
      onClick={() => isMenuOpen.set(!$isMenuOpen)}
      aria-label="Menú de navegación"
    >
      <span
        className={`block w-full h-[2px] rounded transition-all duration-300 ease-out origin-center
        ${$isMenuOpen ? "bg-slate-800 rotate-45 translate-y-[7px]" : "bg-slate-800 group-hover:bg-green-cumtual"}`}
      ></span>
      <span
        className={`block w-full h-[2px] rounded transition-all duration-300 ease-out
        ${$isMenuOpen ? "bg-slate-800 opacity-0 scale-0" : "bg-slate-800 group-hover:bg-green-cumtual"}`}
      ></span>
      <span
        className={`block w-full h-[2px] rounded transition-all duration-300 ease-out origin-center
        ${$isMenuOpen ? "bg-slate-800 -rotate-45 -translate-y-[7px]" : "bg-slate-800 group-hover:bg-green-cumtual"}`}
      ></span>
    </button>
  );
};
