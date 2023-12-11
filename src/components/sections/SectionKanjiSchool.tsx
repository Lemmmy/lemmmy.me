import classNames from "classnames";
import Image from "next/image";

import { Section, SectionTitle } from "./Section";

import { PlainLink } from "../buttons/PlainLink";
import { ButtonRow, Button } from "../buttons/Button";
import { ButtonProjectGitHub } from "../buttons/ButtonProjectGitHub";

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
          custom web client for <PlainLink dark external href="https://wanikani.com">WaniKani</PlainLink>,
          a spaced repetition system for learning Japanese kanji. written in React and TypeScript
        </p>

        <ButtonRow>
          <Button
            href="https://kanji.school/" external
            bg="bg-neutral-800 hover:bg-neutral-700"
            textClass="text-white"
          >
            Visit
          </Button>

          <ButtonProjectGitHub
            project="Lemmmy/KanjiSchool"
            bg="bg-neutral-900 hover:bg-neutral-800"
            textClass="text-white"
            dark
          />
        </ButtonRow>
      </div>

      {/* Image */}
      <Image
        src={image}
        width={640} height={291}
        alt="KanjiSchool"
        className={classNames(
          "rounded-md shadow-lg overflow-hidden max-w-screen-sm",
          "aspect-video"
        )}
      />
    </div>
  </Section>;
}
