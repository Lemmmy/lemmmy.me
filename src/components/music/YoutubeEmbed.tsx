import classNames from "classnames";

interface Props {
  videoId: string;
  title?: string;
  className?: string;
}

export function YoutubeEmbed({
  videoId,
  title,
  className
}: Props): JSX.Element {
  return <div
    className={classNames(
      "rounded-md shadow-lg overflow-hidden max-w-screen-sm",
      className
    )}
  >
    <iframe
      src={`https://www.youtube.com/embed/${videoId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={title ?? "YouTube"}
      className="aspect-video"
      style={{ "width": "100%" }}
    />
  </div>;
}
