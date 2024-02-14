// readPaperList 함수는 서버에서 전체 롤링페이퍼 목록을 반환합니다.
function readPaperList() {
  return fetch(`${process.env.REACT_APP_SERVER_URL}/paper/list`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
}

export default readPaperList;