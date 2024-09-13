import { defineConfig, loadEnv } from "@rsbuild/core";
import { pluginVue2 } from "@rsbuild/plugin-vue2";

const { publicVars } = loadEnv({ prefixes: ["VUE_APP_"] });

export default defineConfig({
  plugins: [pluginVue2()],
  source: {
    define: publicVars,
    alias: {
      remote: "/remote",
      "@": "./src"
    }
  }
});
