import InterfaceLetter from "./Interface/InterfaceLetter";
import Paper from "./Interface/InterfacePaper";
import "./css/LetterColorSelector.css";
import { useState, useEffect } from "react";
import { PiCheckFat } from "react-icons/pi";

type Props = {
  changeLetterColor: (value: any) => void;
  inputtedLetterColor: string;
};
function LetterColorSelector({ changeLetterColor, inputtedLetterColor }: Props) {
  const letterColorList = ["white", "red", "orange", "yellow", "green", "blue"];
  const [selectedColor, setSelectedColor] = useState<string>(
    inputtedLetterColor
  );
  return (
    <div className="LetterColorSelector">
      배경색 :
      {letterColorList.map((element) =>
        selectedColor === element ? (
          <div
            className="colorBtn checked cursor"
            style={{
              backgroundColor: `var(--${element}-color)`,
              border:
                element === "white" ? "1px solid var(--border-color)" : "none",
            }}
          >
            <PiCheckFat />
          </div>
        ) : (
          <div
            className="colorBtn cursor"
            style={{
              backgroundColor: `var(--${element}-color)`,
              border:
                element === "white" ? "1px solid var(--border-color)" : "none",
            }}
            onClick={() => {
              setSelectedColor(element);
              changeLetterColor(element);
            }}
          />
        )
      )}
    </div>
  );
}

export default LetterColorSelector;
