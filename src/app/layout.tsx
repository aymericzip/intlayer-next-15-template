import "./globals.css";
import type { FC, PropsWithChildren } from "react";

export { generateStaticParams } from "next-intlayer";

const RootLayout: FC<PropsWithChildren> = ({ children }) => children;

export default RootLayout;
