import { FC, HTMLProps, ReactNode } from "react";
import Image from "next/image";
import classNames from "classnames";

export interface ProfileButtonProps extends HTMLProps<HTMLAnchorElement> {
  href?: string;
  name: string;
  icon?: ReactNode | string;

  bg?: string;
  className?: string;

  disabled?: boolean;
}

export function ProfileButton({
  href,
  name,
  icon,
  bg = "bg-black",
  className,
  disabled,
  ...props
}: ProfileButtonProps): JSX.Element {
  // eslint-disable-next-line react/jsx-no-target-blank
  return <a
    role="button"
    href={href || undefined}
    title={name}
    target={href ? "_blank" : undefined}
    rel={href ? "noreferrer noopener" : undefined}
    className={classNames(
      "transition-all",
      "w-16 h-16 inline-block",
      "rounded-[32px] shadow-md",
      "text-[64px] leading-[64px]",
      bg,
      className,
      {
        "hover:rounded-[16px] hover:shadow-lg": !disabled,
        "opacity-50 cursor-not-allowed": disabled
      }
    )}
    {...props}
  >
    {typeof icon === "string"
      ? <Image src={icon} width={64} height={64} alt={name} />
      : icon}
  </a>;
}

export const ProfileButtonBox: FC = ({ children }) => {
  return <div
    className="flex flex-wrap gap-2 justify-center md:justify-start"
  >
    {children}
  </div>;
};
