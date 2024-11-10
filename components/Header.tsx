"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/public/vercel.svg";

const Header = () => {
  const currentPath = usePathname();
  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-900 text-white h-20 flex items-center justify-between px-8">
      <div className="flex items-center gap-2">
        <Image src={logo} alt="logo" className="w-6 h-6" />
        <h2 className="text-2xl font-bold">NextTS Challenges</h2>
      </div>
      <nav className="space-x-4">
        <Link
          href="/"
          className={`px-2 py-1 rounded ${
            currentPath === "/" ? "bg-white text-slate-900" : ""
          }`}
        >
          Home
        </Link>
        <Link
          href="/pagination"
          className={`px-2 py-1 rounded ${
            currentPath === "/pagination" ? "bg-white text-slate-900" : ""
          }`}
        >
          Pagination
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
