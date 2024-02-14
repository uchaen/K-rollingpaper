import Letter from "./Letter";
import Paper from "./Interface/InterfacePaper";
import "./css/LetterList.css";
import { useEffect, useState } from "react";
import InterfaceLetter from "./Interface/InterfaceLetter";

type Props = {
  selectedPaper: Paper;
};
function LetterList({ selectedPaper }: Props) {
  const [letterList, setLetterList] = useState<Array<InterfaceLetter>>([]);

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_SERVER_URL}/letter/list?paperId=${selectedPaper.paperId}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((res) => {
        setLetterList(res);
      });
  }, [selectedPaper]);

  return (
    <div className="LetterList">
      <div id="letterListGrid">
        {letterList &&
          letterList.map((element) => <Letter letterObj={element} />)}
      </div>
    </div>
  );
}

export default LetterList;
