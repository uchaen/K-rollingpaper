import "./css/Header.css";
import { useState } from "react";
import { HiPencilAlt } from "react-icons/hi";
import Modal from "./Modal";
import PaperModal from "./PaperModal";

function Header() {
  const [title, setTitle] = useState("");
  const [isUpdateModalOpened, setIsUpdateModalOpened] = useState(false);
  return (
    <div className="Header">
      <div id="title">{title}의 롤링페이퍼</div>
      <HiPencilAlt className="cursor" onClick={()=>setIsUpdateModalOpened(true)} />
      {isUpdateModalOpened && (
        <Modal closeModal={() => setIsUpdateModalOpened(false)}>
          <PaperModal usage="update" />
        </Modal>
      )}
    </div>
  );
}

export default Header;
