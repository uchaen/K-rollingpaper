import InterfaceLetter from "./InterfaceLetter";
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
    <div className="Letter cursor" onClick={() => setIsUpdateModalOpened(true)}>
      <div id="contents">{letterObj.letterContents}</div>
      <div id="author">- {letterObj.letterAuthor}</div>
      {isUpdateModalOpened && (
        <Modal closeModal={() => setIsUpdateModalOpened(false)}>
          <LetterModal usage="update" letterObj={letterObj}/>
        </Modal>
      )}
    </div>
  );
}

export default Letter;
