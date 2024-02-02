import InterfaceLetter from "./Interface/InterfaceLetter";
import Paper from "./Interface/InterfacePaper";
import Password from "./Password";
import createLetter from "./function/createLetter";
import updateLetter from "./function/updateLetter";
import deleteLetter from "./function/deleteLetter";
import { useState, useEffect } from "react";

type Props = {
  usage: string;
  letterObj?: InterfaceLetter;
  selectedPaper?: Paper;
};
function LetterModal({ usage, letterObj, selectedPaper }: Props) {
  const [inputtedContents, setInputtedContents] = useState<string>("");
  const [inputtedAuthor, setInputtedAuthor] = useState<string>("");
  const [inputtedPw, setInputtedPw] = useState<string>("");

  useEffect(() => {
    if (usage === "update") {
      setInputtedContents(letterObj!.letterContents);
      setInputtedAuthor(letterObj!.letterAuthor);
    }
  }, []);

  return (
    <div className="LetterModal">
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
              selectedPaper!.paperId
            )
          }
          startUpdate={() =>
            updateLetter(
              letterObj!.letterId,
              inputtedContents,
              inputtedAuthor,
              inputtedPw
            )
          }
          startDelete={() => deleteLetter(letterObj!.letterId, inputtedPw)}
        />
      </div>
    </div>
  );
}

export default LetterModal;
