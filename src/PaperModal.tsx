import { useState, useEffect } from "react";
import "./css/PaperModal.css";
import InterfacePaper from "./Interface/InterfacePaper";
import createPaper from "./function/createPaper";
import updatePaper from "./function/updatePaper";
import deletePaper from "./function/deletePaper";
import Password from "./Password";
import DeleteAlert from "./DeleteAlert";

type Props = {
  selectedPaper?: InterfacePaper;
  listLength?: number;
  usage: string;
};
function PaperModal({ selectedPaper, usage, listLength }: Props) {
  const [inputtedTitle, setInputtedTitle] = useState<string>("");
  const [inputtedPw, setInputtedPw] = useState("");
  const [isDeleteAlertOpened, setIsDeleteAlertOpened] = useState(false);

  useEffect(() => {
    if (usage === "update") {
      setInputtedTitle(selectedPaper!.paperTitle);
    }
  }, []);

  return (
    <div className="PaperModal">
      <textarea
        id="titleTextarea"
        name="title"
        placeholder="롤링페이퍼의 타이틀을 입력해보세요. (~50자)&#13;&#10;ex) 홍길동"
        value={inputtedTitle}
        maxLength={50}
        onChange={(e) => {
          setInputtedTitle(e.target.value);
        }}
      />
      <div className="flexWrapper">
        <div />
        <Password
          usage={usage}
          changeInputtedPw={(value: any) => setInputtedPw(value)}
          startCreate={() =>
            createPaper(inputtedTitle, inputtedPw, listLength!)
          }
          startUpdate={() =>
            updatePaper(selectedPaper!.paperId, inputtedTitle, inputtedPw)
          }
          startDelete={() => setIsDeleteAlertOpened(true)}
        />
      </div>
      {isDeleteAlertOpened && (
        <DeleteAlert
          startDelete={() => deletePaper(selectedPaper!.paperId, inputtedPw)}
          cancelDelete={() => setIsDeleteAlertOpened(false)}
        />
      )}
    </div>
  );
}

export default PaperModal;
