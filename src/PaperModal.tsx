import Password from "./Password";
import "./css/PaperModal.css";
import { useState, useEffect, SetStateAction } from "react";

interface Paper {
  paperTitle: string;
  paperId: number;
}
type Props = {
  selectedPaper: Paper;
  usage: string;
};
function PaperModal({ selectedPaper, usage }: Props) {
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
      window.location.reload();
    });
  }
  function updatePaper() {}
  function deletePaper() {
    console.log(inputtedPw);
    fetch(`http://localhost:8080/paper/delete`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        paperId: selectedPaper.paperId,
        paperPw: inputtedPw,
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
    <div className="PaperModal">
      <textarea
        id="titleTextarea"
        name="title"
        placeholder="롤링페이퍼의 타이틀을 입력해보세요.&#13;&#10;ex) 홍길동"
        // value={selectedPaper.paperTitle}
        onChange={(e) => {
          setInputtedTitle(e.target.value);
        }}
      />
      <div className="flexWrapper">
        <div />
        <Password
          usage={usage}
          changeInputtedPw={(value: any) => setInputtedPw(value)}
          startCreate={createPaper}
          startUpdate={updatePaper}
          startDelete={deletePaper}
        />
      </div>
    </div>
  );
}

export default PaperModal;
