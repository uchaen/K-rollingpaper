import "./css/Header.css";
import { useState } from "react";
import { HiPencilAlt } from "react-icons/hi";
import Modal from "./Modal";
import PaperModal from "./PaperModal";

interface Paper {
  paperTitle: string;
  paperId: number;
}
type Props = {
  selectedPaper: Paper;
};
function Header({ selectedPaper }: Props) {
  const [isUpdateModalOpened, setIsUpdateModalOpened] = useState(false);
  return (
    <div className="Header">
      <div id="title">{selectedPaper.paperTitle}의 롤링페이퍼</div>
      <HiPencilAlt
        className="cursor"
        onClick={() => setIsUpdateModalOpened(true)}
      />
      {isUpdateModalOpened && (
        <Modal closeModal={() => setIsUpdateModalOpened(false)}>
          <PaperModal selectedPaper={selectedPaper} usage="update" />
        </Modal>
      )}
    </div>
  );
}

export default Header;
