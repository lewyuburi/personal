import { FunctionComponent, ReactElement } from "react";
import { Inter } from "@next/font/google";

import "./global.css";

const inter = Inter({ subsets: ["latin"] });

interface AppLayoutProps {
  children: ReactElement;
}

const AppLayout: FunctionComponent<AppLayoutProps> = (props) => {
  const { children } = props;

  return (
    <html lang="es" className={inter.className}>
      <head>
        <title>Lewis Yuburi</title>
      </head>
      <body className="bg-zinc-200">
        <main>{children}</main>
      </body>
    </html>
  );
};

export default AppLayout;
