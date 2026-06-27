import { useDispatch } from "react-redux";
import Card from "./Card";
import QueryEditor from "./QueryEditor";
import Button from "./common/Button";
import { Sparkles } from "lucide-react";
import { clearQuery } from "../stores/store";

const QueryActions = () => {

    const dispatch = useDispatch();
  return (
    <Card className="mb-8">
      <div className="flex justify-between mb-4">
        <h2 className="font-semibold">
          Paste your SQL query
        </h2>

        <select className="text-sm">
          <option>Example</option>
        </select>
      </div>

      <QueryEditor />

      <div className="flex gap-3 mt-4">
        <Button variant="primary">
          <Sparkles size={16} />
          Analyze Query
        </Button>

        <Button variant="secondary" onClick={() => dispatch(clearQuery())}>
          Clear
        </Button>
      </div>
    </Card>
  );
};

export default QueryActions;