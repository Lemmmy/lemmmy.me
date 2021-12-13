import Image from "next/image";

import { Section, SectionTitle } from "./Section";

import { PlainLink } from "../buttons/PlainLink";
import { Button, ButtonRow } from "../buttons/Button";
import { ButtonProjectGitHub } from "../buttons/ButtonProjectGitHub";

import image from "../../../public/img/osusig.png";

export function SectionOsusig(): JSX.Element {
  return <Section
    className="text-gray-900 bg-white bg-auto bg-repeat"
    bgImage="/img/triangles.jpg"
    noise={0}
  >
    <div className="flex flex-col md:flex-row gap-4 md:gap-16 items-center">
      {/* Description */}
      <div className="flex-1">
        <SectionTitle>osu!sig</SectionTitle>

        <p className="mb-4">
          dynamic signature/player card image generator for the
          game <PlainLink external href="https://osu.ppy.sh">osu!</PlainLink>
        </p>

        <ButtonRow>
          <Button
            href="https://lemmmy.pw/osusig/" external
            bg="bg-osusig hover:bg-osusig-hover"
            textClass="text-white"
          >
            Visit
          </Button>

          <ButtonProjectGitHub
            project="tmpim/osusig"
            bg="bg-osusig/80 hover:bg-osusig-hover/80"
            textClass="text-white"
            dark
          />
        </ButtonRow>
      </div>

      {/* Image */}
      <Image
        src={image}
        width={330} height={86}
        alt="osu!sig"
        className="rounded-[7px]"
      />
    </div>
  </Section>;
}
