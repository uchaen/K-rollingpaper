function deletePaper(paperId: number, paperPw: string) {
  fetch(`${process.env.REACT_APP_SERVER_URL}/paper/delete`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      paperId: paperId,
      paperPw: paperPw,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res) {
        sessionStorage.clear();
        window.location.reload();
      } else {
        window.alert("비밀번호가 일치하지 않습니다.");
      }
    });
}

export default deletePaper;
