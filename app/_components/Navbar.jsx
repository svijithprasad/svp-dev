"use client";

import { CodeSquare, Home, IdCard, Send } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-[#FFFFE3]/20 bg-[#0E100F] text-[#FFFFE3] h-[70px] flex items-center">
      <div className="w-full mx-auto flex items-center justify-between px-6">

        {/* Left - Logo/Username */}
        <div className="flex items-center space-x-2 border border-[#FFFFE3]/20 rounded-full px-6 py-2.5">
          <span className="w-3.5 h-3.5 bg-[#FFFFE3] rounded-full inline-block" />
          <span className="font-hanken text-[17px] tracking-tight">svp-dev</span>
        </div>

        {/* Center - Nav Links */}
        <div className="flex items-center space-x-9 border border-[#FFFFE3]/20 rounded-full px-8 py-2.5">
          <Link href="/" className="flex items-center space-x-1 text-[16px] font-hanken hover:text-[#18A0FB] transition-all ease-in">
            <span><Home size={18} /></span>
            <span>Home</span>
          </Link>
          <Link href="/projects" className="flex items-center space-x-1 text-[16px] font-hanken hover:text-[#18A0FB]  transition-all ease-in">
            <span><CodeSquare size={18} /></span>
            <span>My Projects</span>
          </Link>
          <Link href="/about" className="flex items-center space-x-1 text-[16px] font-hanken hover:text-[#18A0FB]  transition-all ease-in">
            <span><IdCard size={18} /></span>
            <span>About Me</span>
          </Link>
        </div>

        {/* Right - Contact */}
        <div className="flex items-center space-x-2 border border-[#FFFFE3]/20 rounded-full px-6 py-2.5 hover:text-[#18A0FB]  transition-all ease-in">
          <span><Send size={18} /></span>
          <Link href="/contact" className="text-[17px] font-hanken">
            Contact Me
          </Link>
        </div>
      </div>
    </nav>
  );
}
