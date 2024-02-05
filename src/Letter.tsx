import InterfaceLetter from "./Interface/InterfaceLetter";
import LetterModal from "./LetterModal";
import Modal from "./Modal";
import "./css/Letter.css";
import { useState } from "react";

type Props = {
  letterObj: InterfaceLetter;
};
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
