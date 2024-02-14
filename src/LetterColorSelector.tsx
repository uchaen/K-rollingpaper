import { useState, useEffect } from "react";
import { PiCheckFat } from "react-icons/pi";
import "./css/LetterColorSelector.css";

type Props = {
  changeLetterColor: (value: any) => void;
  inputtedLetterColor: string;
};
function LetterColorSelector({ changeLetterColor, inputtedLetterColor }: Props) {
  const letterColorList = ["white", "red", "orange", "yellow", "green", "blue", "purple", "black"];
  const [selectedColor, setSelectedColor] = useState<string>(
    inputtedLetterColor
  );

  useEffect(() => {
    if (!inputtedLetterColor) {
      setSelectedColor("white");
    }
  }, []);

  return (
    <div className="LetterColorSelector">
      <div id="letterColorComment">배경색 : </div> 
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
            <PiCheckFat style={{
              color:
                element === "black" ? "white" : "none",
            }}/>
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
