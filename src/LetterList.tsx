import Letter from "./Letter";
import "./css/LetterList.css";
import { useState } from "react";

function LetterList() {
  const [letterList, setLetterList] = useState([
    "test",
    "test2",
    "te3",
    "s",
    "aasdf",
    "test",
    "test2",
    "te3",
    "s",
    "aasdf",
    "test",
    "test2",
    "te3",
    "s",
  ]);

  return (
    <div className="LetterList">
      <div id="letterListGrid">
        {letterList.map((element) => (
          <Letter contents={element} author={"ss"} />
        ))}
      </div>
    </div>
  );
}

export default LetterList;
