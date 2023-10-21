import React from "react";
import "./AccountItem.css";

const AccountItem = () => {
  return (
    <div className="AccountItem">
      <div className="title_item">내용</div>
      <div className="date_item">{new Date().toLocaleDateString()}</div>
      <div className="btn-delete">
        <button>삭제하기</button>
      </div>
    </div>
  );
};

export default AccountItem;
