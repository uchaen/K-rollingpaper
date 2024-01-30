import React from "react";
import "./css/Password.css";

type Props = {
  usage: string;
};

function Password({ usage }: Props) {
  return (
    <div className="Password">
      <input
        id="passwordText"
        type="password"
        placeholder="비밀번호(~10자)"
        maxLength={10}
      />
      {usage === "create" ? (
        <div className="passwordBtn cursor right">저장</div>
      ) : (
        <div className="flexWrapper">
          <div className="passwordBtn cursor">수정</div>
          <div className="passwordBtn cursor right">삭제</div>
        </div>
      )}
    </div>
  );
}

export default Password;
