import "./css/PaperList.css";
import { useState } from "react";

function PaperList() {
  const [paperList, setPaperList] = useState(["test", "test2", "te3"]);
  return (
    <div className="PaperList">
      {paperList.map((element) => (
        <div>{element}</div>
        // <Link to={`/outfitlist/${element.outfitId}`}>{element}</Link>
      ))}
    </div>
  );
}

export default PaperList;
