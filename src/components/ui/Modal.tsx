import { ReactNode } from "react";

type Modal = {
  id: string;
  children?: ReactNode;
  className?: string;
};

export const Modal = ({ id, children, className }: Modal) => {
  return (
    <div
      id={id}
      className={`uk-flex-top ${className ? className : ""}`}
      uk-modal=""
    >
      <div
        style={{ borderRadius: 20 }}
        className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical"
      >
        <button
          className="uk-modal-close-default"
          type="button"
          uk-close=""
        ></button>
        {children ? children : <div>No content</div>}
      </div>
    </div>
  );
};
