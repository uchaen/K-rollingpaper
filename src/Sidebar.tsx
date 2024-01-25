import "./css/Sidebar.css";
import { useState } from "react";

function Sidebar() {
  const [titleList, setTitleList] = useState(["test","test2","te3"]);
  return (
    <div className="Sidebar">
      <div id="mainLogo">K-롤링페이퍼</div>
      <div id="searchBox">롤링페이퍼 검색</div>
      {titleList.map((element) => (
        <div>{element}</div>
        // <Link to={`/outfitlist/${element.outfitId}`}>{element}</Link>
      ))}
      <div>롤링페이퍼 생성 +</div>
    </div>
  );
}

export default Sidebar;
