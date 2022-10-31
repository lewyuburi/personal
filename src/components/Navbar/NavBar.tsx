import { FunctionComponent } from "react";
import Link from "next/link";

const links = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "About me",
    url: "/about",
  },
  {
    label: "Articles",
    url: "/articles",
  },
  {
    label: "Uses",
    url: "/uses",
  },
];

interface NavBarProps {}

const NavBar: FunctionComponent<NavBarProps> = () => {
  return (
    <ul className="list-none flex mx-auto gap-4">
      {links.map((link) => (
        <li key={link.url}>
          <Link href={link.url} className="px-2 py-4 inline-block">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavBar;
