import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      lang="en"
      className="scroll-smooth text-black"
      style={{ scrollBehavior: "smooth" }}
    >
      <Head />
      <body className="flex">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
