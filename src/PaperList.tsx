import Paper from "./Paper";
import "./css/PaperList.css";
import { useState } from "react";

function PaperList() {
  const [paperList, setPaperList] = useState([
    "test",
    "test2",
    "te3",
    "s",
    "aasdf",
  ]);

  return (
    <div className="PaperList">
      <div id="paperListGrid">
        {paperList.map((element) => (
          <Paper contents={element} author={"ss"} />
        ))}
      </div>
    </div>
  );
}

export default PaperList;
