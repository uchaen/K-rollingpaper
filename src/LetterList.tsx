import { useEffect, useState } from "react";
import "./css/LetterList.css";
import InterfacePaper from "./Interface/InterfacePaper";
import InterfaceLetter from "./Interface/InterfaceLetter";
import readLetterList from "./function/readLetterList";
import Letter from "./Letter";

type Props = {
  selectedPaper: InterfacePaper;
};
function LetterList({ selectedPaper }: Props) {
  const [letterList, setLetterList] = useState<Array<InterfaceLetter>>([]);

  useEffect(() => {
    readLetterList(selectedPaper.paperId).then(
      (result: Array<InterfaceLetter>) => {
        setLetterList(result);
      }
    );
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
