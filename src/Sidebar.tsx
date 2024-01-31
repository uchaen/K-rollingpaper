import "./css/Sidebar.css";
import { ChangeEvent, useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import Modal from "./Modal";
import PaperModal from "./PaperModal";

type Props = {
  changeSelectedTitle: (value: string) => void;
  fetchTitleList: Array<any>;
};
function Sidebar({ changeSelectedTitle, fetchTitleList }: Props) {
  const [titleList, setTitleList] = useState<string[]>([]);
  const [isCreateModalOpened, setIsCreateModalOpened] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState<string>(fetchTitleList[0]);
  const [searchInput, setSearchInput] = useState<string>("");

  const getSearchData = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    setTitleList([...fetchTitleList]);
  }, [fetchTitleList]);

  useEffect(() => {
    if (searchInput === "") {
      setTitleList(fetchTitleList);
    } else {
      setTitleList(
        fetchTitleList.filter((element) => element.includes(searchInput))
      );
    }
  }, [searchInput]);

  useEffect(() => {
    changeSelectedTitle(selectedTitle);
  }, [selectedTitle]);

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
      {titleList.map((element, index) =>
        selectedTitle === element ? (
          <div className="titleListElement selectedTitle cursor">{element}</div>
        ) : (
          <div
            className="titleListElement cursor"
            onClick={() => {
              setSelectedTitle(element);
            }}
          >
            {element}
          </div>
        )
      )}
      <div
        className="titleListElement cursor"
        onClick={() => setIsCreateModalOpened(true)}
      >
        롤링페이퍼 생성 +
      </div>
      {isCreateModalOpened && (
        <Modal closeModal={() => setIsCreateModalOpened(false)}>
          <PaperModal title="" usage="create" />
        </Modal>
      )}
    </div>
  );
}

export default Sidebar;
