import { Button, ButtonProps } from "./Button";
import { GitHubIcon } from "./GitHubIcon";

interface Props extends Omit<ButtonProps, "href" | "external"> {
  project: string;
  dark?: boolean;
}

export function ButtonProjectGitHub({
  project,
  dark,
  ...props
}: Props): JSX.Element {
  return <Button
    href={`https://github.com/${project}`}
    external
    {...props}
  >
    <GitHubIcon
      dark={dark}
      className="mr-2"
    />
    View on GitHub
  </Button>;
}
