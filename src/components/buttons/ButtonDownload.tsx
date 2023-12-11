import { Button, ButtonProps } from "./Button";
import { DownloadIconSvg } from "./Icons";
import { ReactNode } from "react";

interface Props extends ButtonProps {
  dark?: boolean;
  children?: ReactNode;
}

export function ButtonDownload({
  dark,
  children,
  ...props
}: Props): JSX.Element {
  return <Button {...props}>
    <DownloadIconSvg className="w-4 h-4 mr-2" />
    {children}
  </Button>;
}
