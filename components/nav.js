import { StyledNav } from "../styles/styledNav";
import Image from "next/image";
import logo from "../img/logo.svg";
import Link from "next/link";
export default function Nav() {
  return (
    <StyledNav>
      <div className="nav-links">
        <Link href={`/`}>
          <Image src={logo} alt="bein logo" width={190} height={22} />
        </Link>

        <Link href={`/series`}>
          <div className="nav-link">Diziler</div>
        </Link>
        <Link href={`/films`}>
          <div className="nav-link">Filmler</div>
        </Link>
      </div>
      <div className="nav-buttons">
        <div className="nav-button">
          <a href="#">Üye Ol</a>
        </div>
        <div className="nav-button-blue">
          <a href="#">Giriş yap</a>
        </div>
      </div>
    </StyledNav>
  );
}
