import "./css/Header.css";
import Paper from "./InterfacePaper";
import { useState } from "react";
import { HiPencilAlt } from "react-icons/hi";
import Modal from "./Modal";
import PaperModal from "./PaperModal";

type Props = {
  selectedPaper: Paper;
};
function Header({ selectedPaper }: Props) {
  const [isUpdateModalOpened, setIsUpdateModalOpened] = useState(false);
  return (
    <div className="Header">
      {selectedPaper.paperId !== 0 && (
        <>
          <div id="title">{selectedPaper.paperTitle}의 롤링페이퍼</div>
          <HiPencilAlt
            className="cursor"
            onClick={() => setIsUpdateModalOpened(true)}
          />
        </>
      )}

      {isUpdateModalOpened && (
        <Modal closeModal={() => setIsUpdateModalOpened(false)}>
          <PaperModal selectedPaper={selectedPaper} usage="update" />
        </Modal>
      )}
    </div>
  );
}

export default Header;
