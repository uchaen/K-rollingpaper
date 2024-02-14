import { useEffect, useState } from "react";
import "./css/Home.css";
import InterfacePaper from "./Interface/InterfacePaper";
import readPaperList from "./function/readPaperList";
import Header from "./Header";
import Sidebar from "./Sidebar";
import LetterList from "./LetterList";
import LetterCreateBtn from "./LetterCreateBtn";

function Home() {
  const [fetchPaperList, setFetchPaperList] = useState<Array<InterfacePaper>>([
    { paperId: 0, paperTitle: "" },
  ]);
  const [selectedPaper, setSelectedPaper] = useState<InterfacePaper>({
    paperId: 0,
    paperTitle: "",
  });

  useEffect(() => {
    readPaperList().then((result: Array<InterfacePaper>) => {
      setFetchPaperList(result);
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
      {selectedPaper.paperId !== 0 && (
        <LetterCreateBtn selectedPaper={selectedPaper} />
      )}
    </div>
  );
}

export default Home;
