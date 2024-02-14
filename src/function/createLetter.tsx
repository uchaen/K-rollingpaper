// createLetter 함수는 서버에 파라미터값들을 넘겨 편지를 생성합니다.
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
  fetch(`${process.env.REACT_APP_SERVER_URL}/letter`, {
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
