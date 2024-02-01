import "./css/Sidebar.css";
import { ChangeEvent, useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import Modal from "./Modal";
import PaperModal from "./PaperModal";
import Paper from "./InterfacePaper";

type Props = {
  changeSelectedPaper: (value: any) => void;
  fetchPaperList: Array<Paper>;
};
function Sidebar({ changeSelectedPaper, fetchPaperList }: Props) {
  const [paperList, setPaperList] = useState<Array<Paper>>();
  const [selectedPaper, setSelectedPaper] = useState(fetchPaperList[0]);
  const [isCreateModalOpened, setIsCreateModalOpened] = useState(false);
  const [searchInput, setSearchInput] = useState<string>("");

  const getSearchData = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

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
          onChange={getSearchData}
          type="text"
          placeholder="롤링페이퍼 검색"
        />
      </div>
      <div
        className="titleListElement cursor"
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
          <PaperModal selectedPaper={paperList![0]} usage="create" />
        </Modal>
      )}
    </div>
  );
}

export default Sidebar;
