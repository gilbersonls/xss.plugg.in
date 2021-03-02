import Editor, { EditorProps } from "@monaco-editor/react";
import React from "react";

const TranspilerEditorWrapper: React.FC<{ label: string }> = ({
  children,
  label,
}) => {
  return (
    <div className="flex-1 flex flex-col h-full">
      <div className="bg-shell px-4 py-2">
        <h2 className="text-xs text-gray-100">{label}</h2>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
};

const TranspilerEditor: React.FC<EditorProps> = (props) => (
  <Editor
    defaultLanguage="javascript"
    defaultValue="// some comment"
    theme="vs-dark"
    {...props}
    options={{ minimap: { enabled: false }, wordWrap: "on", ...props.options }}
  />
);

const Transpiler: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row h-full overflow-hidden">
      <TranspilerEditorWrapper label="Javascript (ESNEXT)">
        <TranspilerEditor />
      </TranspilerEditorWrapper>
      <TranspilerEditorWrapper label="Result">
        <TranspilerEditor options={{ readOnly: true }} />
      </TranspilerEditorWrapper>
    </div>
  );
};

export default Transpiler;
