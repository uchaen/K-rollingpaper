import { useState, useEffect } from "react";
import "./css/LetterCreateBtn.css";
import LetterModal from "./LetterModal";
import Modal from "./Modal";
import Paper from "./Interface/InterfacePaper";
import { GoPencil } from "react-icons/go";
import ChatgptModal from "./ChatgptModal";

type Props = {
  selectedPaper: Paper;
};
function LetterCreateBtn({ selectedPaper }: Props) {
  const [isFabOpened, setIsFabOpened] = useState(false);
  const [isChatgptModalOpened, setIsChatgptModalOpened] = useState(false);
  const [isCreateModalOpened, setIsCreateModalOpened] = useState(false);
  const [generatedMsg, setGeneratedMsg] = useState<string>();
  useEffect(() => {
    if (generatedMsg) {
      console.log(generatedMsg);
      setIsChatgptModalOpened(false);
      setIsCreateModalOpened(true);
    }
  }, [generatedMsg]);

  return (
    <div className="LetterCreateBtn">
      <div onMouseLeave={() => setIsFabOpened(false)}>
        <div
          className={
            "cursor letterCreateBtn" +
            (isFabOpened ? " hoveringLetterCreateBtn" : "")
          }
          onClick={() => setIsFabOpened(true)}
          onMouseEnter={() => setIsFabOpened(true)}
        >
          +
        </div>
        {isFabOpened && (
          <div className="fab" onClick={() => setIsFabOpened(false)}>
            <div
              className="fabBtn cursor"
              onClick={() => setIsChatgptModalOpened(true)}
            >
              <img id="gptLogo" src="gptLogoBlk.png" />
            </div>
            <div
              className="fabBtn cursor"
              onClick={() => setIsCreateModalOpened(true)}
            >
              <GoPencil size={30} />
            </div>
          </div>
        )}
      </div>
      {isCreateModalOpened && (
        <Modal closeModal={() => setIsCreateModalOpened(false)}>
          <LetterModal
            usage="create"
            selectedPaper={selectedPaper}
            generatedMsg={generatedMsg}
          />
        </Modal>
      )}
      {isChatgptModalOpened && (
        <Modal closeModal={() => setIsChatgptModalOpened(false)}>
          <ChatgptModal
            changeGeneratedMsg={(value: any) => setGeneratedMsg(value)}
          />
        </Modal>
      )}
    </div>
  );
}

export default LetterCreateBtn;
