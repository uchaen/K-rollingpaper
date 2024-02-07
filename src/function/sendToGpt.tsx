const sendToGpt = async (
  nickname: string,
  relation: string,
  topic: string,
  include: string,
  addition: string,
  polite: boolean
) => {
  let msg =
    "롤링페이퍼에 작성할 문장을 100자 이상 300자 이하로 대신 작성해줘. 편지의 형식을 지키지 말고, 마지막에 내 이름을 적을부분은 빼줘. ";
  if (nickname) msg += `나는 받는 사람을 <${nickname}>이라고 불러. `;
  if (relation) msg += `나와는 ${relation} 사이야. `;
  if (topic) msg += `${topic}에 관한 내용으로 작성해줘. `;
  if (include) msg += `<${include}>를 포함해서 작성해줘. `;
  if (addition) msg += `${addition}. `;
  if (polite) msg += `꼭 존댓말을 사용해서 문장을 작성해줘. `;
  else msg += `꼭 반말을 사용해서 문장을 작성해줘. `;
  msg += `내가 말한 조건들을 꼭 지켜서 롤링페이퍼 내용을 대신 써줘.`;

  // console.log(msg);

  const resultresult = await fetch(`https://api.openai.com/v1/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_GPT_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: msg },],
      temperature: 0.9,
      max_tokens: 300,
    }),
  })
    .then((res) => res.json())
    .then(async (res) => {
      return res.choices[0].message.content;
    });
    return resultresult;
}

export default sendToGpt;
