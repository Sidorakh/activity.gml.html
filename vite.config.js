import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig({
    server: {
        port: 3000,
    },
    build: {
        minify: false,
        assetsDir: '',
    },
    plugins: [viteSingleFile()]
});

