import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon?: JSX.Element;
  variant?: "default" | "primary" | "secondary" | "danger" | "text" | "link";
}

export const Button = (props: Props) => {
  return (
    <button
      {...props}
      className={`uk-button uk-border-pill uk-width-1-1 uk-button-${
        props.variant || "default"
      } ${props.className}`}
    >
      {props.icon}
      <span className={`${props.icon ? "uk-margin-small-left" : ""}`}>
        {props.children}
      </span>
    </button>
  );
};
