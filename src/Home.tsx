import { useEffect, useState } from "react";
import "./css/Home.css";
import Paper from "./Interface/InterfacePaper";
import Header from "./Header";
import Sidebar from "./Sidebar";
import LetterList from "./LetterList";
import LetterCreateBtn from "./LetterCreateBtn";

function Home() {
  const [fetchPaperList, setFetchPaperList] = useState<Array<Paper>>([
    { paperId: 0, paperTitle: "" },
  ]);
  const [selectedPaper, setSelectedPaper] = useState<Paper>({
    paperId: 0,
    paperTitle: "",
  });

  useEffect(() => {
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
      {selectedPaper.paperId !== 0 && <LetterCreateBtn />}      
    </div>
  );
}

export default Home;
