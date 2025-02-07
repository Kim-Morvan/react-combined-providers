import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import json from "@rollup/plugin-json";

export default [
  {
    input: "src/index.ts",
    output: [
      { 
        file: "dist/index.cjs.js", 
        format: "cjs", 
        sourcemap: true 
      },
      { 
        file: "dist/index.esm.js", 
        format: "esm", 
        sourcemap: true 
      }
    ],
    plugins: [
      resolve(), 
      commonjs(), 
      typescript({
        tsconfig: "./tsconfig.json",
        jsx: "react",
        jsxFactory: "React.createElement",
        jsxFragmentFactory: "React.Fragment"
      }), 
      json()
    ],
    external: ["react", "react-dom"]
  },
  {
    input: "dist/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()]
  }
];