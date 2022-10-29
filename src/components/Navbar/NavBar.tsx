import { FunctionComponent } from "react";

interface NavBarProps {}

const NavBar: FunctionComponent<NavBarProps> = () => {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Articles</li>
        <li>Uses</li>
      </ul>
    </nav>
  );
};

export default NavBar;
