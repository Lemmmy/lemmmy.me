import Image from "next/image";
import Link from "next/link";

import { Section } from "./Section";

import logo from "../../../public/logo.png";

export function SectionHead(): JSX.Element {
  return <Section
    className="bg-gradient-to-tr from-lemon-dark to-lemon"
    dark
  >
    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
      {/* Logo */}
      <div className="w-[200px] h-[200px] rounded-full shadow-xl">
        <Link href="/">
          <Image
            src={logo}
            alt="Lemmmy"
            width={200}
            height={200}
            className="rounded-full cursor-pointer"
          />
        </Link>
      </div>

      {/* Info */}
      <div className="flex flex-col">
        {/* Name */}
        <div>
          <Link href="/">
            <span className="text-6xl font-semibold hover:underline hover:underline-offset-4 cursor-pointer">
              Lemmmy
            </span>
          </Link>
          <span className="hidden md:inline opacity-50 px-4 text-5xl">&middot;</span>
          <span className="hidden md:inline opacity-75 text-4xl md:text-5xl pt-3 md:pt-0">レミ</span>
        </div>

        <div className="text-3xl pt-2 md:pt-4">
          <a href="#music" className="block md:inline text-white/80 hover:text-white">
            Musician
          </a>
          <span className="hidden md:inline opacity-50 px-4">&middot;</span>
          <a href="#programming" className="block md:inline text-white/80 hover:text-white">
            Programmer
          </a>
        </div>
      </div>
    </div>
  </Section>;
}
