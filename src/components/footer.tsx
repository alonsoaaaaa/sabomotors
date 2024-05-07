import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="flex flex-col items-end px-5 pt-10 pb-16 mt-8 w-full bg-white max-md:max-w-full">
      <div className="flex gap-3 self-stretch pt-4 pb-4 mt-8 text-black border-t border-solid border-zinc-100 max-md:flex-wrap">
        <div className="flex flex-wrap flex-1 gap-4 text-xs leading-3">
          <Link href={"/privacy"} className="justify-center pt-px pb-0.5">
            Aviso de privacidad
          </Link>
          <div className="max-md:max-w-full">Cookies</div>
        </div>
        <div className="my-auto text-xs font-bold leading-3 capitalize">
          © Sabo Motors 2024
        </div>
      </div>
    </footer>
  );
}

export default Footer;
