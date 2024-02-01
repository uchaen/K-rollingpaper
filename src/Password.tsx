import React from "react";
import "./css/Password.css";
import { useState, useEffect, SetStateAction } from "react";

type Props = {
  usage: string;
  changeInputtedPw: (value: any) => void;
  startCreate: ()=>void;
  startUpdate: ()=>void;
  startDelete: ()=>void;
};

function Password({ usage, changeInputtedPw, startCreate, startUpdate, startDelete}: Props) {
  const pwChange = (e: { target: { value: SetStateAction<string> } }) => {
    changeInputtedPw(e.target.value);
  };
  return (
    <div className="Password">
      <input
        id="passwordText"
        type="password"
        placeholder="비밀번호(~10자)"
        maxLength={10}
        onChange={pwChange}
      />
      {usage === "create" ? (
        <div className="passwordBtn cursor right" onClick={startCreate}>저장</div>
      ) : (
        <div className="flexWrapper">
          <div className="passwordBtn cursor" onClick={startUpdate}>수정</div>
          <div className="passwordBtn cursor right" onClick={startDelete}>삭제</div>
        </div>
      )}
    </div>
  );
}

export default Password;
