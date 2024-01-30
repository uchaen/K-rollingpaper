import Password from "./Password";
import "./css/PaperModal.css";
import { useState, useEffect } from "react";

type Props = {
  usage: string;
};
function PaperModal({ usage }: Props) {
  const [title, setTitle] = useState();

  return (
    <div className="PaperModal">
      <textarea
        id="contentsTextarea"
        name="contents"
        placeholder="롤링페이퍼의 타이틀을 입력해보세요.&#13;&#10;ex) 홍길동"
        value={title}
      />
      <div className="flexWrapper">
        {/* <input type="text" id="authorTextarea" name="author" placeholder="작성자" /> */}
        <div />
        <Password usage="create"/>
      </div>
    </div>
  );
}

export default PaperModal;
