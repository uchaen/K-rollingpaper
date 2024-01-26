import "./css/Sidebar.css";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import Modal from "./Modal";
import PaperCreate from "./PaperCreate";

function Sidebar() {
  const [titleList, setTitleList] = useState(["test", "test2", "te3"]);
  const [isCreateModalOpened, setIsCreateModalOpened] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState(0);
  return (
    <div className="Sidebar">
      <div id="mainLogo">K - 롤링페이퍼</div>
      <div id="searchBox">
        <IoIosSearch id="searchIcon" /> 롤링페이퍼 검색
      </div>
      {titleList.map(
        (element, index) =>
          selectedTitle === index ? (
            <div className="titleListElement selectedTitle">{element}</div>
          ) : (
            <div
              className="titleListElement"
              onClick={() => {
                setSelectedTitle(index);
              }}
            >
              {element}
            </div>
          )
        // <Link to={`/outfitlist/${element.outfitId}`}>{element}</Link>
      )}
      <div
        className="titleListElement"
        onClick={() => setIsCreateModalOpened(true)}
      >
        롤링페이퍼 생성 +
      </div>
      {isCreateModalOpened && (
        <Modal closeModal={() => setIsCreateModalOpened(false)}>
          <PaperCreate />
        </Modal>
      )}
    </div>
  );
}

export default Sidebar;
