import "./css/Letter.css";
import { useState } from "react";

type Props = {
    contents: String;
    author: String;
  };

function Letter({contents, author}:Props) {
  return (
    <div className="Letter cursor">
        <div id="contents">{contents}</div>
        <div id="author">- {author}</div>
    </div>
  );
}

export default Letter;