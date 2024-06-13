import style from "./topbar.module.css";

export const TopbarUser = () => {
  return (
    <div className="uk-flex uk-flex-middle">
      <span className="uk-margin-right">User</span>
      <div className={style.profile} />
    </div>
  );
};
