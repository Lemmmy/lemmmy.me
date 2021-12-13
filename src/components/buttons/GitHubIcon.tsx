import classNames from "classnames";

import { GitHubIconSvg } from "./Icons";

interface Props {
  dark?: boolean;
  className?: string;
}

export function GitHubIcon({
  dark,
  className
}: Props): JSX.Element {
  return <GitHubIconSvg
    width={16} height={16}
    className={classNames(
      dark ? "fill-white" : "fill-github-logo",
      "inline-block",
      className
    )}
  />;
}
