import { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  icon?: JSX.Element;
}

export const Input = (props: Props) => {
  return (
    <label className="uk-inline uk-width-1-1">
      {props.icon}
      <input
        style={{ borderRadius: 9999 }}
        {...props}
        className={`uk-input ${props.className}`}
      />
    </label>
  );
};
