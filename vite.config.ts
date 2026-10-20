import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";
import reactRouterConfig from "./react-router.config.js";

export default defineConfig({
  plugins: [
    tailwindcss(),
    reactRouter(),
    nitro({
      serverDir: "./server",
      output: {
        dir: reactRouterConfig.buildDirectory,
        serverDir: `${reactRouterConfig.buildDirectory}/server`,
        publicDir: `${reactRouterConfig.buildDirectory}/client`,
      },
    }),
  ],
  resolve: {
    tsconfigPaths: true,
  },
  environments: {
    ssr: { build: { rollupOptions: { input: "./server/ssr.ts" } } },
  },
  server: { port: 5173 },
});
