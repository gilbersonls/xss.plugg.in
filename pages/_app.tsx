import "tailwindcss/tailwind.css";

import Pages from "@/components/Pages";
import type { AppProps } from "next/app";

const _app: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Pages>
      <Component {...pageProps} />
    </Pages>
  );
};

export default _app;
