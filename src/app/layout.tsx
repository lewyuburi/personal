import { FunctionComponent, ReactElement } from "react";

interface AppLayoutProps {
  children: ReactElement;
}

const AppLayout: FunctionComponent<AppLayoutProps> = (props) => {
  const { children } = props;
  return (
    <html>
      <head>
        <title>Lewis Yuburi</title>
      </head>
      <body>{children}</body>
    </html>
  );
};

export default AppLayout;
