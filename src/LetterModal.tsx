import InterfaceLetter from "./InterfaceLetter";
import Paper from "./InterfacePaper";
import Password from "./Password";
// import "./css/LetterModal.css";
import { useState, useEffect } from "react";

type Props = {
  usage: string;
  letterObj?: InterfaceLetter;
  selectedPaper?: Paper;
};
function LetterModal({ usage, letterObj, selectedPaper }: Props) {
  const [inputtedContents, setInputtedContents] = useState<string>();
  const [inputtedAuthor, setInputtedAuthor] = useState<string>();
  const [inputtedPw, setInputtedPw] = useState<string>("");

  useEffect(() => {
    if (usage === "update") {
      setInputtedContents(letterObj?.letterContents);
      setInputtedAuthor(letterObj?.letterAuthor);
    }
  }, []);

  function createLetter() {
    console.log("asds" + selectedPaper!.paperId);
    fetch(`http://localhost:8080/letter`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        letterContents: inputtedContents,
        letterAuthor: inputtedAuthor,
        letterPw: inputtedPw,
        paperId: selectedPaper!.paperId,
      }),
    }).then(() => {
      window.location.reload();
    });
  }
  function updateLetter() {
    fetch(`http://localhost:8080/letter/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        letterId: letterObj?.letterId,
        letterContents: inputtedContents,
        letterAuthor: inputtedAuthor,
        letterPw: inputtedPw
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          window.location.reload();
        } else {
          window.alert("비밀번호가 일치하지 않습니다.");
        }
      });
  }
  function deleteLetter() {
    fetch(`http://localhost:8080/letter/delete`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        letterId: letterObj?.letterId,
        letterPw: inputtedPw
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          window.location.reload();
        } else {
          window.alert("비밀번호가 일치하지 않습니다.");
        }
      });
  }

  return (
    <div className="LetterModal">
      <textarea
        id="contentsTextarea"
        name="contents"
        placeholder="편지를 작성해보세요."
        value={inputtedContents}
        maxLength={350}
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
          startCreate={createLetter}
          startUpdate={updateLetter}
          startDelete={deleteLetter}
        />
      </div>
    </div>
  );
}

export default LetterModal;
