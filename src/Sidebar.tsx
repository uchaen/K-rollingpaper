import "./css/Sidebar.css";
import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import Modal from "./Modal";
import PaperModal from "./PaperModal";
import Paper from "./Interface/InterfacePaper";

type Props = {
  changeSelectedPaper: (value: any) => void;
  fetchPaperList: Array<Paper>;
};
function Sidebar({ changeSelectedPaper, fetchPaperList }: Props) {
  const [paperList, setPaperList] = useState<Array<Paper>>();
  const [selectedPaper, setSelectedPaper] = useState(fetchPaperList[0]);
  const [isCreateModalOpened, setIsCreateModalOpened] = useState(false);
  const [searchInput, setSearchInput] = useState<string>("");

  useEffect(() => {
    setPaperList([...fetchPaperList]);
  }, [fetchPaperList]);

  useEffect(() => {
    if (searchInput === "") {
      setPaperList(fetchPaperList);
    } else {
      setPaperList(
        fetchPaperList.filter((element) => element.paperTitle.includes(searchInput))
      );
    }
  }, [searchInput]);

  useEffect(() => {
    changeSelectedPaper(selectedPaper);
  }, [selectedPaper]);

  return (
    <div className="Sidebar">
      <div id="mainLogo">K - 롤링페이퍼</div>
      <div id="searchBox">
        <IoIosSearch id="searchIcon" />
        <input
          id="searchText"
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          type="text"
          placeholder="롤링페이퍼 검색"
        />
      </div>
      <div
        className="titleListElement cursor"
        style={{color:"var(--point-color)"}}
        onClick={() => setIsCreateModalOpened(true)}
      >
        롤링페이퍼 생성 +
      </div>
      {paperList?.map((element) =>
        selectedPaper === element ? (
          <div className="titleListElement selectedTitle cursor">{element.paperTitle}</div>
        ) : (
          <div
            className="titleListElement cursor"
            onClick={() => {
              setSelectedPaper(element);
            }}
          >
            {element.paperTitle}
          </div>
        )
      )}
      {isCreateModalOpened && (
        <Modal closeModal={() => setIsCreateModalOpened(false)}>
          <PaperModal usage="create" />
        </Modal>
      )}
    </div>
  );
}

export default Sidebar;
