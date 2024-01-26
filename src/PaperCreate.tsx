import Password from "./Password";
import "./css/PaperCreate.css";
import { useState, useEffect } from "react";

function PaperCreate() {
  const [title, setTitle] = useState("");

  return (
    <div className="PaperCreate">
      <textarea
        id="contentsTextarea"
        name="contents"
        placeholder="롤링페이퍼의 타이틀을 입력해보세요.&#13;&#10;ex) 홍길동"
      />
      <div className="flexWrapper">
        <input type="text" id="authorTextarea" name="author" placeholder="작성자" />
        <Password />

      </div>
    </div>
  );
}

export default PaperCreate;
