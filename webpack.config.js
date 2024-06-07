import WebExtension from "webpack-target-webextension";
import webpack from "webpack";
import { join } from "path";
import { fileURLToPath } from "url";
import {dirname} from "path";

// Get the file path from the URL
const __filename = fileURLToPath(import.meta.url);

// Get the directory name from the file path
const __dirname = dirname(__filename);

/** @returns {webpack.Configuration} */
const config = (a, env) => ({
  // No eval allowed in MV3
  devtool: "cheap-source-map",
  devtool: env.mode === "production" ? undefined : "cheap-source-map",
  resolve: {
    extensions: [".js"],
  },
  entry: {
    background: join(__dirname, "./background.js"),
    content: join(__dirname, "./content.js"),
  },
  output: {
    environment: {
      dynamicImport: true,
    },
  },
  plugins: [
    new WebExtension({
      background: {
        serviceWorkerEntry: "background",
        classicLoader: true,
      },
      weakRuntimeCheck: false,
    }),
  ],
  devServer: {
    hot: "only",
  },
});

export default config;
