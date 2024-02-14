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