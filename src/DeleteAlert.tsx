import "./css/DeleteAlert.css";

type Props = {
  startDelete: () => void;
  cancelDelete: () => void;
};
function DeleteAlert({ startDelete, cancelDelete }: Props) {
  return (
    <div className=" Modal" onClick={cancelDelete}>
      <div className="DeleteAlert">
        <div style={{"padding":"20px"}}>정말 삭제하시겠습니까?</div>
        <div className="cursor DeleteAlertBtn" style={{"color":"red"}} onClick={startDelete}>
          삭제
        </div>
        <div className="cursor DeleteAlertBtn" style={{"color":"var(--font-color)"}} onClick={cancelDelete}>
          취소
        </div>
      </div>
    </div>
  );
}

export default DeleteAlert;
