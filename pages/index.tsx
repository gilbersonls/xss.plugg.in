import Editor from "@monaco-editor/react";
import React from "react";

import Transpiler from "../components/Transpiler";

const index: React.FC = () => {
  return (
    <div className="h-full">
      <Transpiler />
    </div>
  );
};

export default index;
