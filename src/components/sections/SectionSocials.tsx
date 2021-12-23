import { Section } from "./Section";

import { ButtonTwitter, ButtonPayPal, ButtonTwitch, ButtonYouTube } from "../buttons/ProfileButtons";
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
      <ButtonYouTube href="https://www.youtube.com/channel/UCbdhZc7adn0F3lwJd_TsbQA" />
      <ButtonTwitch href="https://twitch.tv/lemmmy_" />
      <ButtonPayPal href="https://paypal.me/lemmmy" />
      <ButtonEmail />
    </ProfileButtonBox>
  </Section>;
}
