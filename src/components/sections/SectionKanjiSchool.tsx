import classNames from "classnames";
import Image from "next/image";

import { Section, SectionTitle } from "./Section";

import { PlainLink } from "../buttons/PlainLink";

import image from "../../../public/img/kanjischool.png";

export function SectionKanjiSchool(): JSX.Element {
  return <Section
    className="bg-gradient-to-tr from-kanjischool-b to-kanjischool-t"
    dark
  >
    <div className="flex flex-col md:flex-row gap-4 md:gap-16 items-center">
      {/* Description */}
      <div className="flex-1">
        <SectionTitle>KanjiSchool</SectionTitle>

        <p className="mb-4">
          experimental custom web client for <PlainLink dark external href="https://wanikani.com">WaniKani</PlainLink>,
          a spaced repetition system for learning Japanese kanji
        </p>

        <span className="opacity-50 italic">coming soon</span>
      </div>

      {/* Image */}
      <Image
        src={image}
        width={640} height={360}
        alt="KanjiSchool"
        className={classNames(
          "rounded-md shadow-lg overflow-hidden max-w-screen-sm",
          "aspect-video"
        )}
      />
    </div>
  </Section>;
}
