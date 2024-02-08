function createPaper(paperTitle: string, paperPw: string, listLength:number) {
  if (paperTitle) {
    fetch(`http://localhost:8080/paper`, {
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
