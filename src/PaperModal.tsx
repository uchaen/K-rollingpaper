import Password from "./Password";
import "./css/PaperModal.css";
import { useState, useEffect } from "react";

type Props = {
  title: string;
  usage: string;
};
function PaperModal({ title, usage }: Props) {
 return (
    <div className="PaperModal">
      <textarea
        id="titleTextarea"
        name="title"
        placeholder="롤링페이퍼의 타이틀을 입력해보세요.&#13;&#10;ex) 홍길동"
        value={title}
      />
      <div className="flexWrapper">
        <div />
        <Password usage={usage}/>
      </div>
    </div>
  );
}

export default PaperModal;
