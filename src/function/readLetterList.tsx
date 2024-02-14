// readLetterList 함수는 서버에서 paperId를 id로 갖는 롤링페이퍼에 해당하는 전체 편지 목록을 반환합니다.
function readLetterList(paperId: number) {
  return fetch(
    `${process.env.REACT_APP_SERVER_URL}/letter/list?paperId=${paperId}`,
    {
      method: "GET",
    }
  )
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
}
export default readLetterList;
