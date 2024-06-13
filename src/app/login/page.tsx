import { Input } from "@/components/ui/Input";
import Link from "next/link";

const LoginPage = () => {
  return (
    <form
      style={{ borderRadius: 20 }}
      className="uk-card uk-card-default uk-card-hover uk-card-body uk-width-1-3@m uk-margin-large-top uk-margin-large-bottom"
    >
      <fieldset className="uk-fieldset">
        <legend role="heading" className="uk-legend">
          Sign In to Continue
        </legend>
        <div className="uk-margin">
          <Input
            icon={<span className="uk-form-icon" uk-icon="icon: mail"></span>}
            type="text"
            placeholder="Enter Email or Phone Number"
            aria-label="Enter Email or Phone Number"
            role="textbox"
            required
          />
        </div>
        <div className="uk-margin">
          <Input
            icon={<span className="uk-form-icon" uk-icon="icon: lock"></span>}
            type="password"
            placeholder="Enter Password"
            aria-label="Enter Password"
            role="textbox"
            required
          />
        </div>
        <div className="uk-margin">
          <button
            role="button"
            type="submit"
            className="uk-button uk-button-primary uk-width-1-1 uk-border-pill"
          >
            Sign In
          </button>
        </div>
        <div className="uk-margin uk-text-center">
          <p className="uk-text-small">
            Dont have an account?{" "}
            <Link role="link" href="/sign-up">
              Sign Up
            </Link>
          </p>
          <Link role="link" href="#" className="uk-text-small">
            Forgot Password?
          </Link>
        </div>
      </fieldset>
    </form>
  );
};

export default LoginPage;
