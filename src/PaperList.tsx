import Paper from "./Paper";
import "./css/PaperList.css";
import { useState } from "react";

function PaperList() {
  const [paperList, setPaperList] = useState(["test", "test2", "te3", "s", "aasdf"]);
  return (
    <div className="PaperList">
      {paperList.map((element) => (
        <Paper contents={element} author={"ss"}/>
      ))}
    </div>
  );
}

export default PaperList;
