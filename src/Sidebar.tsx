import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import "./css/Sidebar.css";
import InterfacePaper from "./Interface/InterfacePaper";
import Modal from "./Modal";
import PaperModal from "./PaperModal";

type Props = {
  changeSelectedPaper: (value: any) => void;
  fetchPaperList: Array<InterfacePaper>;
};
function Sidebar({ changeSelectedPaper, fetchPaperList }: Props) {
  const [paperList, setPaperList] = useState<Array<InterfacePaper>>();
  const [selectedPaper, setSelectedPaper] = useState<InterfacePaper>({
    paperId: 0,
    paperTitle: "",
  });
  const [isCreateModalOpened, setIsCreateModalOpened] = useState(false);
  const [searchInput, setSearchInput] = useState<string>("");

  useEffect(() => {
    setPaperList([...fetchPaperList]);
    if (fetchPaperList.length > 1) {
      const idx = Number(sessionStorage.getItem("selectedPaper"));
      setSelectedPaper(fetchPaperList[idx]);
    }
  }, [fetchPaperList]);

  useEffect(() => {
    if (selectedPaper && fetchPaperList.indexOf(selectedPaper) !== -1) {
      sessionStorage.setItem(
        "selectedPaper",
        String(fetchPaperList.indexOf(selectedPaper))
      );
    }
    changeSelectedPaper(selectedPaper);
  }, [selectedPaper]);

  useEffect(() => {
    if (searchInput === "") {
      setPaperList(fetchPaperList);
    } else {
      setPaperList(
        fetchPaperList.filter((element) =>
          element.paperTitle.includes(searchInput)
        )
      );
    }
  }, [searchInput]);

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
        style={{ color: "var(--point-color)" }}
        onClick={() => setIsCreateModalOpened(true)}
      >
        롤링페이퍼 생성 +
      </div>
      {paperList?.map((element) =>
        selectedPaper === element ? (
          <div className="titleListElement selectedTitle cursor">
            {element.paperTitle}
          </div>
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
          <PaperModal usage="create" listLength={fetchPaperList.length}/>
        </Modal>
      )}
    </div>
  );
}

export default Sidebar;
