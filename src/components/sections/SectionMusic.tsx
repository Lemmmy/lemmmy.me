import { Section } from "./Section";

import { ButtonAppleMusic, ButtonBandcamp, ButtonDeezer, ButtonSoundcloud, ButtonSpotify, ButtonTwitch, ButtonYouTube } from "../buttons/ProfileButtons";
import { ProfileButtonBox } from "../buttons/ProfileButton";

export function SectionMusic(): JSX.Element {
  return <Section
    title="Music" anchor="music"
    className="bg-zinc-800"
    dark
  >
    <ProfileButtonBox>
      <ButtonSpotify href="https://open.spotify.com/artist/3E9BfUtHylafgeCDRapYKZ" />
      <ButtonAppleMusic href="https://music.apple.com/artist/1599314776" />
      <ButtonBandcamp href="https://lemmmy.bandcamp.com" />
      <ButtonSoundcloud href="https://soundcloud.com/epicidity" />
      <ButtonYouTube href="https://www.youtube.com/channel/UCbdhZc7adn0F3lwJd_TsbQA" />
      <ButtonDeezer href="https://www.deezer.com/en/artist/153858422" />
      <ButtonTwitch href="https://twitch.tv/lemmmy_" />
    </ProfileButtonBox>
  </Section>;
}
