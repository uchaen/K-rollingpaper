import "./css/Header.css";
import { useState } from "react";
import { HiPencilAlt } from "react-icons/hi";
import Modal from "./Modal";
import PaperModal from "./PaperModal";

type Props = {
  title: string;
};
function Header({ title }: Props) {
  const [isUpdateModalOpened, setIsUpdateModalOpened] = useState(false);
  return (
    <div className="Header">
      <div id="title">{title}의 롤링페이퍼</div>
      <HiPencilAlt
        className="cursor"
        onClick={() => setIsUpdateModalOpened(true)}
      />
      {isUpdateModalOpened && (
        <Modal closeModal={() => setIsUpdateModalOpened(false)}>
          <PaperModal title={title} usage="update" />
        </Modal>
      )}
    </div>
  );
}

export default Header;
