// updatePaper 함수는 서버에서 파라미터값에 해당하는 롤링페이퍼를 수정합니다.
function updatePaper(paperId: number, paperTitle: string, paperPw: string) {
  if (paperTitle) {
    fetch(`${process.env.REACT_APP_SERVER_URL}/paper/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        paperId: paperId,
        paperTitle: paperTitle,
        paperPw: paperPw,
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
  } else {
    window.alert("타이틀을 필수로 입력해주세요");
  }

}

export default updatePaper;
