import { createRequestHandler, RouterContextProvider } from "react-router";

const requestHandler = createRequestHandler(
  () => import("virtual:react-router/server-build"),
  import.meta.env.MODE,
);

export default {
  async fetch(req: Request) {
    const routerContext = new RouterContextProvider();

    return requestHandler(req, routerContext);
  },
};
