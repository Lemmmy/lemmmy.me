import Image from "next/image";

import { ProfileButton, ProfileButtonProps } from "./ProfileButton";

import {
  SpotifyIconSvg, AppleMusicIconSvg, BandcampIconSvg, SoundcloudIconSvg,
  GitHubLogoIconSvg, TmpimIconSvg, TwitterIconSvg, PayPalIconSvg, TwitchIconSvg, YouTubeIconSvg
} from "./Icons";

type Props = Omit<ProfileButtonProps, "name">;

export const ButtonSpotify = (props: Props): JSX.Element => <ProfileButton
  name="Spotify"
  bg="bg-spotify-logo"
  icon={<SpotifyIconSvg />}
  {...props}
/>;

export const ButtonAppleMusic = (props: Props): JSX.Element => <ProfileButton
  name="Apple Music"
  bg="bg-gradient-to-t from-apple-music-b to-apple-music-t"
  icon={<AppleMusicIconSvg />}
  {...props}
/>;

export const ButtonBandcamp = (props: Props): JSX.Element => <ProfileButton
  name="Bandcamp"
  bg="bg-bandcamp-logo"
  icon={<BandcampIconSvg />}
  {...props}
/>;

export const ButtonSoundcloud = (props: Props): JSX.Element => <ProfileButton
  name="Soundcloud"
  bg="bg-soundcloud-logo"
  icon={<SoundcloudIconSvg />}
  {...props}
/>;

export const ButtonGitHub = (props: Props): JSX.Element => <ProfileButton
  name="GitHub"
  bg="bg-github-logo"
  icon={<GitHubLogoIconSvg />}
  {...props}
/>;

export const ButtonTmpim = (props: Props): JSX.Element => <ProfileButton
  name="tmpim"
  bg="bg-tmpim-logo"
  icon={<TmpimIconSvg />}
  {...props}
/>;

export const ButtonTwitter = (props: Props): JSX.Element => <ProfileButton
  name="twitter"
  bg="bg-twitter-logo"
  icon={<TwitterIconSvg />}
  {...props}
/>;

export const ButtonPayPal = (props: Props): JSX.Element => <ProfileButton
  name="paypal"
  bg="bg-paypal-logo"
  icon={<PayPalIconSvg />}
  {...props}
/>;

export const ButtonTwitch = (props: Props): JSX.Element => <ProfileButton
  name="twitch"
  bg="bg-twitch-logo"
  icon={<TwitchIconSvg />}
  {...props}
/>;

export const ButtonYouTube = (props: Props): JSX.Element => <ProfileButton
  name="youtube"
  bg="bg-youtube-logo"
  icon={<YouTubeIconSvg />}
  {...props}
/>;

export const ButtonDeezer = (props: Props): JSX.Element => <ProfileButton
  name="deezer"
  bg="bg-deezer-logo"
  className="overflow-hidden"
  icon={<Image src="/img/deezer.png" width={64} height={64} alt="Deezer" />}
  {...props}
/>;


