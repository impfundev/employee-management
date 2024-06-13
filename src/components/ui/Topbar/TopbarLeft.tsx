import Link from "next/link";

export const TopbarLeft = () => {
  return (
    <div className="uk-navbar-left">
      <ul className="uk-navbar-nav">
        <li>
          <Link href="/">
            <span className="uk-button uk-button-text">Home</span>
          </Link>
        </li>
        <li>
          <Link href="/karyawan">
            <span className="uk-button uk-button-text">Karyawan</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};
