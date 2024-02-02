import { useState } from "react";
import "./css/Home.css";
import LetterModal from "./LetterModal";
import Modal from "./Modal";
import Paper from "./Interface/InterfacePaper";

type Props = {
  selectedPaper: Paper;
};
function LetterCreateBtn({selectedPaper}:Props) {
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
          <LetterModal usage="create" selectedPaper={selectedPaper}/>
        </Modal>
      )}
    </div>
  );
}

export default LetterCreateBtn;
