import "./css/Sidebar.css";
import { ChangeEvent, useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import Modal from "./Modal";
import PaperModal from "./PaperModal";

function Sidebar() {
  const [fetchTitleList, setFetchTitleList] = useState<string[]>(["test", "test2", "te3"]);
  const [titleList, setTitleList] = useState<string[]>([]);
  const [isCreateModalOpened, setIsCreateModalOpened] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState(0);
  const [searchInput, setSearchInput] = useState<string>("");

  const getSearchData = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  useEffect(()=>{
    setTitleList([...fetchTitleList]);
  },[fetchTitleList])

  useEffect(() => {
    if(searchInput === "") {
      setTitleList(fetchTitleList);
    } else {
      setTitleList(fetchTitleList.filter((element) => element.includes(searchInput)));
    }
  }, [searchInput]);

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
      )}
      <div
        className="titleListElement"
        onClick={() => setIsCreateModalOpened(true)}
      >
        롤링페이퍼 생성 +
      </div>
      {isCreateModalOpened && (
        <Modal closeModal={() => setIsCreateModalOpened(false)}>
          <PaperModal usage="create"/>
        </Modal>
      )}
    </div>
  );
}

export default Sidebar;
