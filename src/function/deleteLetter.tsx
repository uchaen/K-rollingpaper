// deleteLetter 함수는 서버에서 파라미터값에 해당하는 편지를 삭제합니다.
function deleteLetter(letterId: number, letterPw: string) {
  fetch(`${process.env.REACT_APP_SERVER_URL}/letter/delete`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      letterId: letterId,
      letterPw: letterPw,
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

export default deleteLetter;
