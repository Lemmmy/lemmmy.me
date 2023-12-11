import { Section } from "./Section";

import { ButtonAppleMusic, ButtonBandcamp, ButtonDeezer, ButtonSoundcloud, ButtonSpotify, ButtonTwitch, ButtonYouTube } from "../buttons/ProfileButtons";
import { ProfileButtonBox } from "../buttons/ProfileButton";
import { Button, ButtonRow } from "../buttons/Button";
import { DownloadIconSvg } from "../buttons/Icons";

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

    <ButtonRow className="mt-8">
      <Button href="https://music.lemmmy.me" external className="!w-auto !flex-0">
        <DownloadIconSvg className="w-4 h-4 mr-2" />
        Direct downloads and more (.wav)
      </Button>
    </ButtonRow>
  </Section>;
}
