import { intlayerMiddleware } from "next-intlayer/middleware";

export const middleware = intlayerMiddleware;

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
