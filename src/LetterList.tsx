import { useEffect, useState } from "react";
import "./css/LetterList.css";
import InterfacePaper from "./Interface/InterfacePaper";
import InterfaceLetter from "./Interface/InterfaceLetter";
import Letter from "./Letter";

type Props = {
  selectedPaper: InterfacePaper;
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
