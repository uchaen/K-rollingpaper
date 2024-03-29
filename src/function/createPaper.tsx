// createPaper 함수는 서버에 파라미터값들을 넘겨 롤링페이퍼를 생성합니다.
function createPaper(paperTitle: string, paperPw: string, listLength:number) {
  if (paperTitle) {
    fetch(`${process.env.REACT_APP_SERVER_URL}/paper`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        paperTitle: paperTitle,
        paperPw: paperPw,
      }),
    }).then(() => {
      sessionStorage.setItem("selectedPaper", String(listLength));
      window.location.reload();
    });
  } else {
    window.alert("타이틀을 필수로 입력해주세요");
  }
}

export default createPaper;
