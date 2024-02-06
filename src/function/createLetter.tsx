function createLetter(
  letterContents: string,
  letterAuthor: string,
  letterPw: string,
  paperId: number,
  inputtedLetterColor: string
) {
  if (!inputtedLetterColor) {
    inputtedLetterColor = "white";
  }
  fetch(`http://localhost:8080/letter`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      letterContents: letterContents,
      letterAuthor: letterAuthor,
      letterPw: letterPw,
      paperId: paperId,
      letterColor: inputtedLetterColor,
    }),
  }).then(() => {
    window.location.reload();
  });
}

export default createLetter;
