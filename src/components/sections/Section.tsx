import { FC, ReactNode } from "react";
import classNames from "classnames";

export type SectionProps = SectionTitleProps & {
  title?: ReactNode;
  anchor?: string;
  bgImage?: string;
  className?: string;
  dark?: boolean;
  noise?: number;
}

export const Section: FC<SectionProps> = ({
  title,
  anchor,
  bgImage,
  className,
  titleClassName,
  titleSize,
  dark,
  noise = 0.3,
  children
}) => {
  return <div
    id={anchor}
    className={classNames(
      "bg-cover bg-center relative",
      { "text-white": dark },
      className
    )}
    style={{
      backgroundImage: bgImage ? `url(${bgImage})` : undefined
    }}
  >
    {/* Noise background overlay */}
    {noise !== 0 &&
      <div
        className={classNames(
          "absolute inset-0 z-0 pointer-events-none",
          "bg-noise mix-blend-overlay"
        )}
        style={{ opacity: noise }}
      />}

    <div className="container mx-auto p-4 md:p-8 z-10 relative">
      {/* Title area */}
      {title && <SectionTitle
        titleClassName={titleClassName} titleSize={titleSize}
        dark={dark}
      >
        {title}
      </SectionTitle>}

      {/* Body */}
      {children}
    </div>
  </div>;
};

export interface SectionTitleProps {
  titleClassName?: string;
  titleSize?: string;
  dark?: boolean;
}

export const SectionTitle: FC<SectionTitleProps> = ({
  titleClassName,
  titleSize = "text-4xl md:text-7xl",
  dark,
  children
}) => {
  return <div
    className={classNames(
      "mb-4 md:mb-8 w-full break-all",
      "uppercase font-thin text-center md:text-left",
      { "text-white": dark },
      titleSize, titleClassName
    )}
  >
    {children}
  </div>;
};
