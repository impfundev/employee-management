import { TopbarLeft } from "./TopbarLeft";
import { TopbarRigth } from "./TopbarRigth";

export const Topbar = () => {
  return (
    <nav
      style={{ position: "sticky", top: "0", zIndex: 1000 }}
      className="uk-navbar-small uk-navbar-white uk-background-default uk-box-shadow-small"
    >
      <div className="uk-container">
        <div uk-navbar="">
          <TopbarLeft />
          <TopbarRigth />
        </div>
      </div>
    </nav>
  );
};
