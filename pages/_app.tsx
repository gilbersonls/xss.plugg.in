import "tailwindcss/tailwind.css";

import type { AppProps } from "next/app";
import React from "react";

import Header from "../components/Header";

const _app: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className="h-screen flex flex-col bg-shell">
      <Header />
      <div className="flex-1">
        <Component {...pageProps} />
      </div>
    </div>
  );
};

export default _app;
