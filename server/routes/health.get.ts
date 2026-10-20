import { useLogger } from "evlog/nitro/v3";
import { defineHandler } from "nitro";

export default defineHandler(async (ev) => {
  const log = useLogger(ev);

  log.info("Health check");

  return { status: "OK" };
});
