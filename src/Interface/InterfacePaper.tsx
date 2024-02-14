// 백엔드에서 paperDTO에 해당하는 타입스크립트용 인터페이스입니다
interface InterfacePaper {
  paperId: number;
  paperTitle: string;
  paperPw?: string;
}

export default InterfacePaper;
