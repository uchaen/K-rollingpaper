import { useState } from "react";
import "./css/Home.css";
import LetterModal from "./LetterModal";
import Modal from "./Modal";

function LetterCreateBtn() {
  const [isCreateModalOpened, setIsCreateModalOpened] = useState(false);

  return (
    <div className="LetterCreateBtn">
      <div
        className="cursor"
        id="letterCreateBtn"
        onClick={() => setIsCreateModalOpened(true)}
      >
        +
      </div>
      {isCreateModalOpened && (
        <Modal closeModal={() => setIsCreateModalOpened(false)}>
          <LetterModal usage="create" />
        </Modal>
      )}
    </div>
  );
}

export default LetterCreateBtn;
