import { FunctionComponent, ReactElement } from "react";
import Link from "next/link";

import NavBar from "components/Navbar";

import "./global.css";
import Script from "next/script";

const socialLinks = [
  {
    label: "Twitter",
    url: "https://twitter.com/LewisYuburi",
    icon: "bi-twitter",
  },
  {
    label: "Instagram",
    url: "https://instagram.com/LewisYuburi",
    icon: "bi-instagram",
  },
  {
    label: "Github",
    url: "https://github.com/LewYuburi",
    icon: "bi-github",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/lewisyuburi",
    icon: "bi-linkedin",
  },
];

interface AppLayoutProps {
  children: ReactElement;
}

const AppLayout: FunctionComponent<AppLayoutProps> = (props) => {
  const { children } = props;

  return (
    <html lang="es">
      <head>
        <title>Lewis Yuburi</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
        />
      </head>
      <body className="bg-zinc-200 relative overflow-x-hidden">
        <header>
          <div className="container mx-auto flex align-center flex-col lg:flex-row">
            <div className="flex flex-1 justify-center lg:justify-start">
              <Link href="/" className="px-2 py-4 text-xl font-extrabold">
                {"Lew"} 😼
              </Link>
            </div>

            <nav className="flex flex-1">
              <NavBar />
            </nav>

            <div className="flex justify-center lg:justify-end flex-1 gap-5">
              <div className="flex items-center gap-5">
                {socialLinks.map((link) => (
                  <Link
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <i className={`bi ${link.icon} text-xl`} />
                  </Link>
                ))}
              </div>

              {/* <div className="my-5 border-l border-zinc-900 opacity-30" />

              <div className="flex items-center gap-5">
                <i className="bi bi-moon-fill text-xl" />
                <i className="bi bi-sun-fill text-xl" />
              </div> */}
            </div>
          </div>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
};

export default AppLayout;
