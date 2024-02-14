import React from "react";
import "./css/Modal.css";

type Props = {
  children: React.ReactNode;
  closeModal: () => void;
};

// 재사용 가능한 모달창에 대한 컴포넌트입니다
function Modal({ children, closeModal }: Props) {
  function closeM() {
    closeModal();
  }

  return (
    <div className="Modal" onClick={closeM}>
      <div className="modalBody" onClick={(e) => e.stopPropagation()}>
        <button id="modalCloseBtn" onClick={closeM}>
          ✖
        </button>
        {children} {/*모달 내용 */}
      </div>
    </div>
  );
}

export default Modal;
