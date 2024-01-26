import React from "react";
import "./css/Password.css";

function Password() {

  return (
    <div className="Password">
        <input id="passwordText" type="password" placeholder="비밀번호(~10자)" maxLength={10}/>
        <div className="passwordBtn">저장</div>
        <div className="passwordBtn">삭제</div>
    </div>
  );
}

export default Password;