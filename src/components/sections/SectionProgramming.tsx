import { Section } from "./Section";

import { ButtonGitHub, ButtonTmpim } from "../buttons/ProfileButtons";
import { ProfileButtonBox } from "../buttons/ProfileButton";

export function SectionProgramming(): JSX.Element {
  return <Section
    title="Programming" anchor="programming"
    className="bg-zinc-800"
    dark
  >
    <ProfileButtonBox>
      <ButtonGitHub href="https://github.com/Lemmmy" />
      <ButtonTmpim href="https://github.com/tmpim" />
    </ProfileButtonBox>
  </Section>;
}
