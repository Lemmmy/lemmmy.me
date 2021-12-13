import { HTMLProps, FC } from "react";
import classNames from "classnames";

export interface LinkProps extends HTMLProps<HTMLAnchorElement> {
  href?: string;
  external?: boolean;
  textClass?: string;
  className?: string;
  noUnderline?: boolean;
  dark?: boolean;
}

export const PlainLink: FC<LinkProps> = ({
  href,
  external,
  dark,
  textClass = dark
    ? "text-white/75 hover:text-white"
    : "text-gray-700 hover:text-gray-500",
  className,
  noUnderline,
  children,
  ...props
}) => {
  // eslint-disable-next-line react/jsx-no-target-blank
  return <a
    href={href || undefined}
    target={external ? "_blank" : undefined}
    rel={external ? "noreferrer noopener" : undefined}
    className={classNames(
      "transition",
      textClass,
      className,
      {
        "underline": !noUnderline
      }
    )}
    {...props}
  >
    {children}
  </a>;
};
