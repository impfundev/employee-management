import { ReactNode } from "react";

const SignUpLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="uk-container uk-flex uk-flex-center">{children}</main>
  );
};

export default SignUpLayout;
