import { Section } from "./Section";

import { ButtonAppleMusic, ButtonBandcamp, ButtonSoundcloud, ButtonSpotify } from "../buttons/ProfileButtons";
import { ProfileButtonBox } from "../buttons/ProfileButton";

export function SectionMusic(): JSX.Element {
  return <Section
    title="Music" anchor="music"
    className="bg-zinc-800"
    dark
  >
    <ProfileButtonBox>
      <ButtonSpotify href="https://open.spotify.com/artist/3E9BfUtHylafgeCDRapYKZ" />
      <ButtonAppleMusic disabled />
      <ButtonBandcamp href="https://lemmmy.bandcamp.com" />
      <ButtonSoundcloud href="https://soundcloud.com/epicidity" />
    </ProfileButtonBox>
  </Section>;
}
