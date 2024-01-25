import "./css/Header.css";
import { useState, useEffect, useLayoutEffect } from "react";

function Header() {
  const [title, setTitle] = useState("");
  return (
    <div className="Header">
      <div id="title">{title}의 롤링페이퍼</div>
      <div>편집</div>
    </div>
  );
}

export default Header;
