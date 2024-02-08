import { useState, useEffect } from "react";
import "./css/LetterCreateBtn.css";
import LetterModal from "./LetterModal";
import Modal from "./Modal";
import Paper from "./Interface/InterfacePaper";
import { RiRobot2Line, RiPencilLine  } from "react-icons/ri";
import RollingeeModal from "./RollingeeModal";

type Props = {
  selectedPaper: Paper;
};
function LetterCreateBtn({ selectedPaper }: Props) {
  const [isFabOpened, setIsFabOpened] = useState(false);
  const [isRollingeeModalOpened, setIsRollingeeModalOpened] = useState(false);
  const [isCreateModalOpened, setIsCreateModalOpened] = useState(false);
  const [generatedMsg, setGeneratedMsg] = useState<string>();
  useEffect(() => {
    if (generatedMsg) {
      // console.log(generatedMsg);
      setIsRollingeeModalOpened(false);
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
              onClick={() => setIsRollingeeModalOpened(true)}
            >
              <RiRobot2Line size={30}/>
            </div>
            <div
              className="fabBtn cursor"
              onClick={() => setIsCreateModalOpened(true)}
            >
              <RiPencilLine size={30} />
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
      {isRollingeeModalOpened && (
        <Modal closeModal={() => setIsRollingeeModalOpened(false)}>
          <RollingeeModal
            changeGeneratedMsg={(value: any) => setGeneratedMsg(value)}
          />
        </Modal>
      )}
    </div>
  );
}

export default LetterCreateBtn;
