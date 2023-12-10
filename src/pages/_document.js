import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      lang="en"
      className="scroll-smooth text-black"
      style={{ scrollBehavior: "smooth" }}
    >
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <Head />

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
