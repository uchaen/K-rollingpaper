import Password from "./Password";
// import "./css/LetterModal.css";
import { useState, useEffect } from "react";

type Props = {
  usage: string;
};
function LetterModal({ usage }: Props) {
  const [contents, setContents] = useState();
  const [author, setAuthor] = useState();
  const [inputtedPw, setInputtedPw] = useState("");
  function createLetter() {
    // fetch(`http://localhost:8080/paper/list`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     paperTitle: inputtedTitle,
    //     paperPw: inputtedPw,
    //   }),
    // }).then(() => {
    //   // sessionStorage.clear();
    //   // window.location.replace("/outfitList");
    // });
  }


  return (
    <div className="LetterModal">
      <textarea
        id="contentsTextarea"
        name="contents"
        placeholder="편지를 작성해보세요."
        value={contents}
      />
      <div className="flexWrapper">
        <input type="text" id="authorTextarea" name="author" placeholder="작성자" value={author}/>
        <Password usage={usage} changeInputtedPw={(value: any) => setInputtedPw(value)} startFetch={()=>createLetter()} />
      </div>
    </div>
  );
}

export default LetterModal;
