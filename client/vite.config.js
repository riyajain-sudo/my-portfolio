import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");
  return {
    plugins: [react()],
    // Root-hosted deployments work by default; set VITE_BASE_PATH=/my-portfolio/ for Pages.
    base: env.VITE_BASE_PATH || "/",
    server: {
      port: 5173,
    },
  };
});
