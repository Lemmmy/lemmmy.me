import { FC, HTMLProps } from "react";
import classNames from "classnames";

export interface ButtonProps extends HTMLProps<HTMLAnchorElement> {
  href?: string;
  external?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  bg?: string;
  textClass?: string;
  className?: string;
}

export const Button: FC<ButtonProps> = ({
  href,
  external,
  disabled,
  onClick,
  bg = "bg-white hover:bg-gray-200",
  textClass = "text-gray-900",
  className,
  children,
  ...props
}) => {
  // eslint-disable-next-line react/jsx-no-target-blank
  return <a
    role="button"
    href={href || undefined}
    onClick={onClick}
    target={external ? "_blank" : undefined}
    rel={external ? "noreferrer noopener" : undefined}
    className={classNames(
      "transition",
      "w-full sm:w-auto inline-block py-2 px-3",
      "rounded-md shadow-md",
      "text-sm text-center font-semibold uppercase",
      "flex items-center justify-center",
      textClass,
      bg,
      className,
      {
        "hover:shadow-lg": !disabled,
        "opacity-50 cursor-not-allowed": disabled
      }
    )}
    {...props}
  >
    {children}
  </a>;
};

export const ButtonRow: FC = ({ children }) => {
  return <div className="flex flex-col md:flex-row gap-2">
    {children}
  </div>;
};
