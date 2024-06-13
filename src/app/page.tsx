import Link from "next/link";
import style from "./page.module.css";

const Home = () => (
  <div className={style.header}>
    <h1 className={style.title}>Welcome to Employee Management System</h1>
    <div className="uk-flex uk-width-1-2@s uk-width-1-3@m uk-flex-center uk-child-width-1-2">
      <Link
        href="/login"
        className="uk-button uk-button-default uk-width-1-1 uk-border-pill uk-margin-small-right"
      >
        Login
      </Link>
      <Link
        href="/sign-up"
        className="uk-button uk-button-primary uk-width-1-1 uk-border-pill"
      >
        Sign Up
      </Link>
    </div>
    <p>
      Proudly present by Ilham Maulana Pratama. Source Code:{" "}
      <Link href="https://github.com/ilhammaulana/employee-management">
        Github <span uk-icon="icon: link-external"></span>
      </Link>
    </p>
  </div>
);

export default Home;
