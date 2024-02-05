function updateLetter(
  letterId: number,
  letterContents: string,
  letterAuthor: string,
  letterPw: string,
  inputtedLetterColor: string
) {
  // console.log(typeof(inputtedLetterColor));
  fetch(`http://localhost:8080/letter/update`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      letterId: letterId,
      letterContents: letterContents,
      letterAuthor: letterAuthor,
      letterPw: letterPw,
      letterColor: inputtedLetterColor
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res) {
        window.location.reload();
      } else {
        window.alert("비밀번호가 일치하지 않습니다.");
      }
    });
}

export default updateLetter;
