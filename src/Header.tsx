import "./css/Header.css";
import { useState } from "react";
import { HiPencilAlt } from "react-icons/hi";

function Header() {
  const [title, setTitle] = useState("");
  return (
    <div className="Header">
      <div id="title">{title}의 롤링페이퍼</div>
      <HiPencilAlt />
    </div>
  );
}

export default Header;
