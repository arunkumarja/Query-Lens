import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../stores/store";
import type { RootState } from "../stores/store";
import { Editor } from "@monaco-editor/react";

const QueryEditor = ()=>{
  const dispatch = useDispatch();

  const query = useSelector(
    (state: RootState) => state.query.sqlQuery
  );
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
    <Editor
    height="300px"
    language="sql"
    theme="vs-light"
    value={query}
    onChange={(value) =>
      dispatch(setQuery(value || ""))
    }
    options={{
      minimap: { enabled: false },
      fontSize: 14,
      fontFamily: "Consolas, monospace",
      lineNumbers: "on",
      scrollBeyondLastLine: false,
      wordWrap: "on",
    }} 
    />
  </div>
  );
};

export default QueryEditor;