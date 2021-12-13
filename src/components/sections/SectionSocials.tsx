import { Section } from "./Section";

import { ButtonTwitter, ButtonPayPal } from "../buttons/ProfileButtons";
import { ProfileButtonBox } from "../buttons/ProfileButton";
import { ButtonEmail } from "../buttons/ButtonEmail";

export function SectionSocials(): JSX.Element {
  return <Section
    title="Socials" anchor="socials"
    className="bg-zinc-800"
    dark
  >
    <ProfileButtonBox>
      <ButtonTwitter href="https://twitter.com/epicidity" />
      <ButtonPayPal href="https://paypal.me/lemmmy" />
      <ButtonEmail />
    </ProfileButtonBox>
  </Section>;
}
