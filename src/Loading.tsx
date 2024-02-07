const Loading = () => {
    const styleObj = {
      display: "flex",
      flexDirection: "column",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "20px",
      color: "black",
      zIndex: 1,
      // paddingTop: "300px",
    } as const;
    return (
      <div style={styleObj}>
        {/* <div>잠시만 기다려 주세요</div> */}
        <img src="spinner.gif" alt="로딩중" width="20%"/>
      </div>
    );
  };
  
  export default Loading;