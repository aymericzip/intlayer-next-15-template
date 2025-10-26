import { intlayerProxy } from "next-intlayer/middleware";

export const middleware = intlayerProxy;

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
