import { useState } from "react";
import "./css/Home.css";
import LetterModal from "./LetterModal";
import Modal from "./Modal";
import Header from "./Header";
import Sidebar from "./Sidebar";
import PaperList from "./PaperList";

function Home() {
  const [isCreateModalOpened, setIsCreateModalOpened] = useState(false);
  return (
    <div className="Home">
      <div id="homeGrid">
        <Sidebar />
        <Header />
        <PaperList />
      </div>
      <div className="cursor" id="letterCreateBtn" onClick={() => setIsCreateModalOpened(true)}>
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
