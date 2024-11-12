"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/public/vercel.svg";
import MenuIcon from "@/assets/svg/MenuIcon";

const Header = () => {
  const currentPath = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-900 text-white h-20 flex items-center justify-between px-8">
      <div className="flex items-center gap-2">
        <Image src={logo} alt="logo" className="w-6 h-6" />
        <h2 className="text-xl sm:text-2xl font-bold">NextJS+TS Challenges</h2>
      </div>

      {/* Toggle Button for Mobile Menu */}
      <input type="checkbox" id="menu-toggle" className="hidden peer" />
      <label
        htmlFor="menu-toggle"
        className="sm:hidden cursor-pointer [&_*]:h-full [&_*]:w-full h-10 w-10"
      >
        <MenuIcon />
      </label>

      {/* Mobile Menu */}
      <nav className="hidden peer-checked:flex sm:flex flex-col items-start gap-3 max-sm:p-4 absolute left-0 right-0 top-20 sm:relative sm:flex-row sm:top-0 bg-slate-900">
        <Link
          href="/"
          className={`px-2 py-1 rounded ${
            currentPath === "/" ? "bg-white text-slate-900" : ""
          }`}
        >
          Home
        </Link>
        <Link
          href="/table-pagination"
          className={`px-2 py-1 rounded ${
            currentPath === "/table-pagination" ? "bg-white text-slate-900" : ""
          }`}
        >
          Table Pagination
        </Link>
        <Link
          href="/todo"
          className={`px-2 py-1 rounded ${
            currentPath === "/todo" ? "bg-white text-slate-900" : ""
          }`}
        >
          Todo
        </Link>
      </nav>
    </header>
  );
};

export default Header;
