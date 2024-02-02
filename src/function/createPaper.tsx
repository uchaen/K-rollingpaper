function createPaper(paperTitle: string, paperPw: string) {
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
    window.location.reload();
  });
}

export default createPaper;