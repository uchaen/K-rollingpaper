import { useState } from "react";
import {
  MdRadioButtonChecked,
  MdOutlineRadioButtonUnchecked,
} from "react-icons/md";
import { RiRobot2Line } from "react-icons/ri";
import "./css/RollingeeModal.css";
import sendToRollingee from "./function/sendToRollingee";
import Loading from "./Loading";

type Props = {
  changeGeneratedMsg: (value: any) => void;
};
function RollingeeModal({ changeGeneratedMsg }: Props) {
  const [inputtedNickname, setInputtedNickname] = useState<string>("");
  const [inputtedTopic, setInputtedTopic] = useState<string>("");
  const [inputtedRelation, setInputtedRelation] = useState<string>("");
  const [inputtedInclude, setInputtedInclude] = useState<string>("");
  const [inputtedPolite, setInputtedPolite] = useState<boolean>(false);
  const [inputtedAddition, setInputtedAddition] = useState<string>("");
  const [loading, setLoading] = useState(false);

  return (
    <div className="RollingeeModal">
      <div className="infoComment"> <RiRobot2Line/>&nbsp; 롤링이에게 편지를 대신 써달라고 해보아요~</div>
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
        className="sendToRollingeeBtn cursor"
        onClick={async () => {
          setLoading(true);
          const result = await sendToRollingee(
            inputtedNickname,
            inputtedRelation,
            inputtedTopic,
            inputtedInclude,
            inputtedAddition,
            inputtedPolite
          );
          setLoading(true);
          changeGeneratedMsg(result);
        }}
      >
        <RiRobot2Line size={30} /> &nbsp; 롤링이에게 부탁하기
      </div>
      {loading && <Loading/>}
    </div>
  );
}

export default RollingeeModal;
