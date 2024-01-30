import "./css/Paper.css";
import { useState } from "react";

type Props = {
    contents: String;
    author: String;
  };

function Paper({contents, author}:Props) {
  return (
    <div className="Paper cursor">
        <div id="contents">{contents}</div>
        <div id="author">- {author}</div>
    </div>
  );
}

export default Paper;