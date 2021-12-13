import classNames from "classnames";

export type MusicReleaseType = "single" | "album" | "ep";
export const MUSIC_RELEASE_BG: Record<MusicReleaseType, string> = {
  "single": "bg-red-700",
  "ep": "bg-cyan-600",
  "album": "bg-lime-600"
};

interface Props {
  type: MusicReleaseType;
}

export function MusicReleaseTypeBadge({ type }: Props): JSX.Element {
  return <span className={classNames(
    "hidden md:inline-block px-3 py-2 mt-2 mr-6",
    "leading-none text-white text-2xl",
    "rounded-lg shadow-md shadow-black/20",
    MUSIC_RELEASE_BG[type]
  )}>
    {type}
  </span>;
}
