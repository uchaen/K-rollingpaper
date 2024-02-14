// 백엔드에서 letterDTO에 해당하는 타입스크립트용 인터페이스입니다
interface InterfaceLetter {
    letterId: number,
    letterAuthor: string,
    letterContents: string,
    paperId : number,
    letterPw?: string,
    letterColor: string
}

export default InterfaceLetter;