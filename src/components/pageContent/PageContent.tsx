import { FC } from "react";
import { ClientComponent } from "../clientComponent";
import { Logo } from "../Logo";
import { ServerComponent } from "../serverComponent";
import { LocaleSwitcher } from "../localeSwitcher/LocaleSwitcher";

const PageContent: FC = () => (
  <div className="flex flex-col items-center justify-center h-screen max-w-72 m-auto gap-20">
    <Logo className="w-full h-auto mx-auto" />

    <LocaleSwitcher />

    <div className="flex flex-col items-start justify-start gap-4 text-left w-full">
      <ClientComponent />
      <ServerComponent />
    </div>
  </div>
);

export default PageContent;
