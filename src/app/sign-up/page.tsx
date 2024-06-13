import { Input } from "@/components/ui/Input";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <form
      style={{ borderRadius: 20 }}
      className="uk-card uk-card-default uk-card-hover uk-card-body uk-width-1-3@m uk-margin-large-top uk-margin-large-bottom"
    >
      <fieldset className="uk-fieldset">
        <legend role="heading" className="uk-legend">
          Sign Up to Continue
        </legend>
        <div className="uk-margin">
          <Input
            icon={<span className="uk-form-icon" uk-icon="icon: mail"></span>}
            role="textbox"
            type="text"
            placeholder="Enter Email"
            aria-label="Enter Email"
            required
          />
        </div>
        <div className="uk-margin">
          <Input
            icon={<span className="uk-form-icon" uk-icon="icon: lock"></span>}
            role="textbox"
            type="password"
            placeholder="Enter Password"
            aria-label="Enter Password"
            required
          />
        </div>
        <div className="uk-margin">
          <Input
            icon={<span className="uk-form-icon" uk-icon="icon: user"></span>}
            role="textbox"
            type="text"
            placeholder="Enter Name"
            aria-label="Enter Name"
            required
          />
        </div>
        <div className="uk-margin">
          <Input
            icon={<span className="uk-form-icon" uk-icon="icon: phone"></span>}
            role="textbox"
            type="text"
            placeholder="Enter Phone Number"
            aria-label="Enter Phone Number"
            required
          />
        </div>
        <div className="uk-margin">
          <button
            role="button"
            className="uk-button uk-button-primary uk-width-1-1 uk-border-pill"
          >
            Sign In
          </button>
        </div>
        <div className="uk-margin uk-text-center">
          <p className="uk-text-small">
            Already have an account?{" "}
            <Link role="link" href="/login">
              Login
            </Link>
          </p>
        </div>
      </fieldset>
    </form>
  );
};

export default SignUpPage;
