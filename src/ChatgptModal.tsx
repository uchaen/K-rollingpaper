import InterfaceLetter from "./Interface/InterfaceLetter";
import Paper from "./Interface/InterfacePaper";
import { useState, useEffect } from "react";
import {
  MdRadioButtonChecked,
  MdOutlineRadioButtonUnchecked,
} from "react-icons/md";
import sendToGpt from "./function/sendToGpt";
import "./css/ChatgptModal.css";

type Props = {
  selectedPaper: Paper;
};
function ChatgptModal({ selectedPaper }: Props) {
  const [inputtedNickname, setInputtedNickname] = useState<string>("");
  const [inputtedRelation, setInputtedRelation] = useState<string>("");
  const [inputtedInclude, setInputtedInclude] = useState<string>("");
  const [inputtedPolite, setInputtedPolite] = useState<boolean>(true);

  return (
    <div className="ChatgptModal">
      <div>ChatGPT에게 편지를 대신 써달라고 해보아요~</div>
      <input
        type="text"
        className="marginTop"
        placeholder="내가 부르는 호칭"
        onChange={(e) => {
          setInputtedNickname(e.target.value);
        }}
      />
      <input
        type="text"
        className="marginTop"
        placeholder="나와의 관계"
        onChange={(e) => {
          setInputtedRelation(e.target.value);
        }}
      />
      <input
        type="text"
        className="marginTop"
        placeholder="포함시킬 단어"
        onChange={(e) => {
          setInputtedInclude(e.target.value);
        }}
      />
      <div className="marginTop radioWrapper">
        <div className="radioLabel">반말</div>
        {inputtedPolite ? (
          <MdOutlineRadioButtonUnchecked
            onClick={() => {
              setInputtedPolite(false);
            }}
          />
        ) : (
          <MdRadioButtonChecked />
        )}
        <div className="radioLabel" style={{ marginLeft: "10px" }}>
          존댓말
        </div>
        {inputtedPolite ? (
          <MdRadioButtonChecked />
        ) : (
          <MdOutlineRadioButtonUnchecked
            onClick={() => {
              setInputtedPolite(true);
            }}
          />
        )}
      </div>
      <div
        className="sendToGptBtn cursor"
        onClick={() =>
          sendToGpt(
            inputtedNickname,
            inputtedRelation,
            inputtedInclude,
            inputtedPolite
          )
        }
      >
        <img id="gptLogo" src="gptLogo.png" /> &nbsp; ChatGPT에게 부탁하기
      </div>
    </div>
  );
}

export default ChatgptModal;
