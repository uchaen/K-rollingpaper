import InterfaceLetter from "./Interface/InterfaceLetter";
import Paper from "./Interface/InterfacePaper";
import Password from "./Password";
import createLetter from "./function/createLetter";
import updateLetter from "./function/updateLetter";
import deleteLetter from "./function/deleteLetter";
import { useState, useEffect } from "react";
import LetterColorSelector from "./LetterColorSelector";
import DeleteAlert from "./DeleteAlert";

type Props = {
  usage: string;
  letterObj?: InterfaceLetter;
  selectedPaper?: Paper;
  generatedMsg?: string;
};
function LetterModal({ usage, letterObj, selectedPaper, generatedMsg }: Props) {
  const [inputtedLetterColor, setInputtedLetterColor] = useState<string | any>(
    letterObj?.letterColor
  );
  const [inputtedContents, setInputtedContents] = useState<string>("");
  const [inputtedAuthor, setInputtedAuthor] = useState<string>("");
  const [inputtedPw, setInputtedPw] = useState<string>("");
  const [isDeleteAlertOpened, setIsDeleteAlertOpened] = useState(false);

  useEffect(() => {
    if (usage === "update") {
      setInputtedContents(letterObj!.letterContents);
      setInputtedAuthor(letterObj!.letterAuthor);
    }
    if (usage === "create") {
      setInputtedContents(generatedMsg!);
    }
  }, []);

  return (
    <div className="LetterModal">
      <LetterColorSelector
        changeLetterColor={(value: string) => {
          setInputtedLetterColor(value);
        }}
        inputtedLetterColor={inputtedLetterColor}
      />
      <textarea
        id="contentsTextarea"
        name="contents"
        placeholder="편지를 작성해보세요."
        value={inputtedContents}
        maxLength={600}
        onChange={(e) => {
          setInputtedContents(e.target.value);
        }}
      />
      <div className="flexWrapper">
        <input
          type="text"
          id="authorTextarea"
          name="author"
          placeholder="작성자(~17자)"
          value={inputtedAuthor}
          maxLength={17}
          onChange={(e) => {
            setInputtedAuthor(e.target.value);
          }}
        />
        <Password
          usage={usage}
          changeInputtedPw={(value: any) => setInputtedPw(value)}
          startCreate={() =>
            createLetter(
              inputtedContents,
              inputtedAuthor,
              inputtedPw,
              selectedPaper!.paperId,
              inputtedLetterColor
            )
          }
          startUpdate={() =>
            updateLetter(
              letterObj!.letterId,
              inputtedContents,
              inputtedAuthor,
              inputtedPw,
              inputtedLetterColor
            )
          }
          startDelete={() => setIsDeleteAlertOpened(true)}
        />
      </div>
      {isDeleteAlertOpened && (
        <DeleteAlert
          startDelete={() => deleteLetter(letterObj!.letterId, inputtedPw)}
          cancelDelete={() => setIsDeleteAlertOpened(false)}
        />
      )}
    </div>
  );
}

export default LetterModal;
