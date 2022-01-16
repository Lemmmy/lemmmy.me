import { ReactNode } from "react";
import Image from "next/image";

import { Section, SectionProps } from "./Section";
import { YoutubeEmbed } from "../music/YoutubeEmbed";

import { MusicReleaseType, MusicReleaseTypeBadge } from "../music/MusicReleaseTypeBadge";

import { Button } from "../buttons/Button";
import { dateInFuture } from "../../utils/dateInFuture";
import { formatHmsDuration } from "../util";

export interface MusicReleaseProps extends SectionProps {
  type: MusicReleaseType;
  title: string;
  releaseDate: string;
  released?: boolean;
  description?: ReactNode;

  videoId?: string;
  cover?: string;
  get?: string;
  tracks?: Track[];
}

export interface Track {
  name: string;
  duration: number;
}

export function SectionMusicRelease({
  type,
  title,
  releaseDate,
  released,
  description,
  videoId,
  cover,
  get,
  tracks,
  ...props
}: MusicReleaseProps): JSX.Element {
  const releaseFuture = !released && dateInFuture(releaseDate);

  return <Section
    title={<div className="flex flex-col md:flex-row items-center gap-2 md:gap-0">
      <MusicReleaseTypeBadge type={type} />
      <span>{title}</span>
      <span className="hidden md:inline opacity-50 px-4">&middot;</span>

      <span className="block md:inline opacity-75 text-3xl font-semibold">
        {releaseFuture !== undefined
          ? (releaseFuture ? "out " : "released ")
          : undefined}
        {releaseDate}
      </span>
    </div>}
    titleSize="text-5xl"
    noise={0.4}
    {...props}
  >
    <div className="flex flex-col md:flex-row gap-4 md:gap-16 items-center">
      {/* Demo video, if available */}
      {videoId &&
        <YoutubeEmbed videoId={videoId} title={title} className="flex-1" />}
      {/* Otherwise, cover, if available */}
      {cover && <div
        className="rounded-md shadow-lg overflow-hidden w-[300px] h-[300px]"
      >
        <Image
          src={cover}
          width={300} height={300}
          alt={title + " cover"}
        />
      </div>}

      {/* Info area */}
      <div className="flex-1">
        {/* Description */}
        {description && <p className="mb-4">
          {description}
        </p>}

        {/* Tracklist */}
        {tracks && <div className="mb-4">
          <h1 className="text-3xl mb-2">Tracklist</h1>

          <ol>{tracks.map((t, i) => <li key={i + t.name}>
            {/* Track number, zero padded */}
            <span className="opacity-75 pr-2">
              {(i + 1).toString().padStart(tracks.length >= 10 ? 2 : 1, "0")}.
            </span>

            {/* Track title */}
            <span className="font-semibold">
              {t.name}
            </span>

            {/* Track duration */}
            {t.duration > 0 && <span className="pl-2 opacity-75">
              ({formatHmsDuration(t.duration)})
            </span>}
          </li>)}</ol>
        </div>}

        {/* Get/pre-save button + release date */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center">
          {/* Get/pre-save button */}
          {get && <Button href={get} external>
            {releaseFuture ? "Pre-save now" : "Stream / download"}
          </Button>}

          {/* Release date */}
          <span className="opacity-75 lowercase">
            {releaseFuture !== undefined
              ? (releaseFuture ? "Releases " : "Released ")
              : undefined}
            {releaseDate}
          </span>
        </div>
      </div>
    </div>
  </Section>;
}
