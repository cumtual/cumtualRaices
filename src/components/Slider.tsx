import { useStore } from "@nanostores/react";
import { isMenuOpen } from "./MenuStore";

export const Slider = () => {
  const $isMenuOpen = useStore(isMenuOpen);
  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 ease-in-out 
        ${$isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => isMenuOpen.set(false)}
      />
      <aside
        className={`bg-white/95 backdrop-blur-lg w-[280px] h-full top-0 right-0 z-40 fixed pt-24 px-8 pb-8 flex flex-col gap-2 shadow-2xl border-l border-slate-100
        transition-all duration-300 ease-out transform
        ${$isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <a
          href="#"
          className="text-slate-700 hover:text-green-cumtual font-medium py-3 border-b border-slate-100 transition-colors duration-200"
          onClick={() => isMenuOpen.set(false)}
        >
          Nosotros
        </a>
        <a
          href="#"
          className="text-slate-700 hover:text-green-cumtual font-medium py-3 border-b border-slate-100 transition-colors duration-200"
          onClick={() => isMenuOpen.set(false)}
        >
          Anuncios
        </a>
        <a
          href="#"
          className="text-slate-700 hover:text-green-cumtual font-medium py-3 border-b border-slate-100 transition-colors duration-200"
          onClick={() => isMenuOpen.set(false)}
        >
          Blog
        </a>
        <a
          href="#"
          className="text-slate-700 hover:text-green-cumtual font-medium py-3 border-b border-slate-100 transition-colors duration-200"
          onClick={() => isMenuOpen.set(false)}
        >
          Contacto
        </a>
      </aside>
    </>
  );
};
