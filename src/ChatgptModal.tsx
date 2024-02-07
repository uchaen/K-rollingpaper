import { useState } from "react";
import {
  MdRadioButtonChecked,
  MdOutlineRadioButtonUnchecked,
} from "react-icons/md";
import sendToGpt from "./function/sendToGpt";
import "./css/ChatgptModal.css";

type Props = {
  changeGeneratedMsg: (value: any) => void;
};
function ChatgptModal({ changeGeneratedMsg }: Props) {
  const [inputtedNickname, setInputtedNickname] = useState<string>("");
  const [inputtedTopic, setInputtedTopic] = useState<string>("");
  const [inputtedRelation, setInputtedRelation] = useState<string>("");
  const [inputtedInclude, setInputtedInclude] = useState<string>("");
  const [inputtedPolite, setInputtedPolite] = useState<boolean>(false);
  const [inputtedAddition, setInputtedAddition] = useState<string>("");

  return (
    <div className="ChatgptModal">
      <div>ChatGPT에게 편지를 대신 써달라고 해보아요~</div>
      <input
        type="text"
        className="marginTop"
        placeholder="내가 부르는 호칭 (ex. 길동아)"
        onChange={(e) => {
          setInputtedNickname(e.target.value);
        }}
      />
      <input
        type="text"
        className="marginTop"
        placeholder="나와의 관계 (ex. 회사동기)"
        onChange={(e) => {
          setInputtedRelation(e.target.value);
        }}
      />
      <input
        type="text"
        className="marginTop"
        placeholder="편지 주제 (ex. 작별인사)"
        onChange={(e) => {
          setInputtedTopic(e.target.value);
        }}
      />
      <input
        type="text"
        className="marginTop"
        placeholder="포함시킬 단어 (ex. 잘지내)"
        onChange={(e) => {
          setInputtedInclude(e.target.value);
        }}
      />
      <input
        type="text"
        className="marginTop"
        placeholder="추가로 부탁할 내용 (ex. 친한 말투로 써줘)"
        onChange={(e) => {
          setInputtedAddition(e.target.value);
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
          changeGeneratedMsg(
            sendToGpt(
              inputtedNickname,
              inputtedRelation,
              inputtedTopic,
              inputtedInclude,
              inputtedAddition,
              inputtedPolite
            )
          )
        }
      >
        <img id="gptLogo" src="gptLogo.png" /> &nbsp; ChatGPT에게 부탁하기
      </div>
    </div>
  );
}

export default ChatgptModal;
