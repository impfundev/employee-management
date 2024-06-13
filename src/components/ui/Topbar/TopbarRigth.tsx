import { TopbarUser } from "./TopbarUser";

export const TopbarRigth = () => {
  return (
    <div className="uk-navbar-right">
      <ul className="uk-navbar-nav">
        <li>
          <TopbarUser />
          <div className="uk-navbar-dropdown">
            <ul className="uk-nav uk-navbar-dropdown-nav">
              <li className="uk-active">
                <button className="uk-button uk-button-text">Profile</button>
              </li>
              <li>
                <button className="uk-button uk-button-text">Logout</button>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};
