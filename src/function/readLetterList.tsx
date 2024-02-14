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
