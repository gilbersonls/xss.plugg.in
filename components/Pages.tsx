import React from "react";

import Header from "./Header";

const Pages: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default Pages;
