import classNames from "classnames";
import Image from "next/image";

import { Section } from "./Section";

import { PlainLink } from "../buttons/PlainLink";
import { Button, ButtonRow } from "../buttons/Button";
import { ButtonProjectGitHub } from "../buttons/ButtonProjectGitHub";

import image from "../../../public/img/kristweb.png";

export function SectionKristWeb(): JSX.Element {
  return <Section
    title="KristWeb 2"
    className="bg-gradient-to-tr from-kristweb-b to-kristweb-t"
    dark
  >
    <div className="flex flex-col md:flex-row gap-4 md:gap-16 items-center">
      {/* Image */}
      <Image
        src={image}
        width={640} height={360}
        alt="KristWeb"
        className={classNames(
          "rounded-md shadow-lg overflow-hidden max-w-screen-sm",
          "aspect-video"
        )}
      />

      {/* Description */}
      <div className="flex-1">
        <p className="mb-4">
          web wallet for <PlainLink dark external href="https://krist.ceriat.net">Krist</PlainLink>,
          an in-game currency for <PlainLink dark external href="https://computercraft.cc">ComputerCraft</PlainLink>
        </p>

        <ButtonRow>
          <Button
            href="https://krist.club/" external
            bg="bg-kristweb-primary hover:bg-kristweb-primary-hover"
            textClass="text-white"
          >
            Visit
          </Button>

          <ButtonProjectGitHub
            project="tmpim/KristWeb2"
            bg="bg-kristweb-primary/50 hover:bg-kristweb-primary-hover/50"
            textClass="text-white"
            dark
          />
        </ButtonRow>
      </div>
    </div>
  </Section>;
}
