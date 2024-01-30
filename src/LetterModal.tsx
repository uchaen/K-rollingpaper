import Password from "./Password";
// import "./css/LetterModal.css";
import { useState, useEffect } from "react";

type Props = {
  usage: string;
};
function LetterModal({ usage }: Props) {
  const [contents, setContents] = useState();
  const [author, setAuthor] = useState();

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
        <Password usage={usage}/>
      </div>
    </div>
  );
}

export default LetterModal;
