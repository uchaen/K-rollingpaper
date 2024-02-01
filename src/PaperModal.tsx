import Password from "./Password";
import "./css/PaperModal.css";
import { useState, useEffect, SetStateAction } from "react";

type Props = {
  title: string;
  usage: string;
};
function PaperModal({ title, usage }: Props) {
  const [inputtedTitle, setInputtedTitle] = useState<string>("");
  const [inputtedPw, setInputtedPw] = useState("");

  function createPaper() {
    console.log(inputtedPw, inputtedTitle);
    fetch(`http://localhost:8080/paper`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        paperTitle: inputtedTitle,
        paperPw: inputtedPw,
      }),
    }).then(() => {
      // sessionStorage.clear();
      window.location.reload();
    });
  }
  return (
    <div className="PaperModal">
      <textarea
        id="titleTextarea"
        name="title"
        placeholder="롤링페이퍼의 타이틀을 입력해보세요.&#13;&#10;ex) 홍길동"
        // value={title}
        onChange={(e) => {
          setInputtedTitle(e.target.value);
        }}
      />
      <div className="flexWrapper">
        <div />
        <Password
          usage={usage}
          changeInputtedPw={(value: any) => setInputtedPw(value)}
          startFetch={() => createPaper()}
        />
      </div>
    </div>
  );
}

export default PaperModal;
