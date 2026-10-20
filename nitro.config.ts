import evlog from "evlog/nitro/v3";
import { defineConfig } from "nitro";

export default defineConfig({
  modules: [evlog()],
});
