import { useState } from "react";
import "./css/Letter.css";
import InterfaceLetter from "./Interface/InterfaceLetter";
import LetterModal from "./LetterModal";
import Modal from "./Modal";

type Props = {
  letterObj: InterfaceLetter;
};

// 삭제 전 확인을 위한 알림창에 대한 컴포넌트입니다
function Letter({ letterObj }: Props) {
  const [isUpdateModalOpened, setIsUpdateModalOpened] = useState(false);
  return (
    <div
      className="Letter"
      style={{ backgroundColor: `var(--${letterObj.letterColor}-color)` }}
    >
      <div className="cursor" onClick={() => setIsUpdateModalOpened(true)}>
        <div id="contents">{letterObj.letterContents}</div>
        <div id="author">- {letterObj.letterAuthor}</div>
      </div>

      {isUpdateModalOpened && (
        <Modal closeModal={() => setIsUpdateModalOpened(false)}>
          <LetterModal usage="update" letterObj={letterObj} />
        </Modal>
      )}
    </div>
  );
}

export default Letter;
