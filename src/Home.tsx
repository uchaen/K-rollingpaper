import { useEffect, useState, useLayoutEffect} from "react";
import "./css/Home.css";
import Paper from "./InterfacePaper";
import LetterModal from "./LetterModal";
import Modal from "./Modal";
import Header from "./Header";
import Sidebar from "./Sidebar";
import LetterList from "./LetterList";


function Home() {
  const [isCreateModalOpened, setIsCreateModalOpened] = useState(false);
  const [fetchPaperList, setFetchPaperList] = useState<Array<Paper>>([
    { paperId: 0, paperTitle: "" },
  ]);
  const [selectedPaper, setSelectedPaper] = useState<Paper>({
    paperId: 0,
    paperTitle: "",
  });

  useLayoutEffect(() => {
    fetch("http://localhost:8080/paper/list", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        setFetchPaperList(res);
      });
  }, []);

  return (
    <div className="Home">
      <div id="homeGrid">
        <Sidebar
          changeSelectedPaper={(value: any) => setSelectedPaper(value)}
          fetchPaperList={fetchPaperList}
        />
        <Header selectedPaper={selectedPaper} />
        <LetterList selectedPaper={selectedPaper} />
      </div>
      <div
        className="cursor"
        id="letterCreateBtn"
        onClick={() => setIsCreateModalOpened(true)}
      >
        +
      </div>
      {isCreateModalOpened && (
        <Modal closeModal={() => setIsCreateModalOpened(false)}>
          <LetterModal usage="create" />
        </Modal>
      )}
    </div>
  );
}

export default Home;
