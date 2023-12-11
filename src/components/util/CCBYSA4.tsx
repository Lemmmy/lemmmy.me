import classNames from "classnames";

const iconStyle = {
  height: 22,
  marginLeft: 6,
  verticalAlign: "text-bottom",
  display: "inline-block"
};

interface Props {
  className?: string;
}

// https://chooser-beta.creativecommons.org/
export function CCBYSA4({ className }: Props): JSX.Element {
  return <p className={classNames("text-left block", className)}>
    This work by <span property="cc:attributionName">Drew Edwards</span> is
    licensed under{" "}
    <a
      href="https://creativecommons.org/licenses/by-sa/4.0/"
      target="_blank"
      rel="license noopener noreferrer"
      className="inline-block"
    >
      CC BY-SA 4.0
      <img style={iconStyle} src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" />
      <img style={iconStyle} src="https://mirrors.creativecommons.org/presskit/icons/by.svg" />
      <img style={iconStyle} src="https://mirrors.creativecommons.org/presskit/icons/sa.svg" />
    </a>
  </p>;
}
