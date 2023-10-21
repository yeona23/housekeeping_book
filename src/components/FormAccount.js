import "./FormAccount.css";

import React from "react";

const FormAccount = () => {
  return (
    <div className="FormAccount">
      <div className="title_form">
        <label>이름</label>
        <input />
      </div>
      <div className="price_form">
        <label>가격</label>
        <input type="number" />
      </div>
      <div className="type_form">
        <label>유형</label>
        <select>
          <option></option>
          <option>생활용품</option>
          <option>식비</option>
          <option>교육비</option>
          <option>기타</option>
        </select>
      </div>
      <div className="date_form">
        <label>구입 날짜</label>
        <input type="date" />
      </div>
      <div className="memo_form">
        <label>메모</label>
        <input type="checkbox" />
      </div>
      <div className="repurchase_form">
        <label>재구매 의사</label>
        <input type="radio" />
      </div>
    </div>
  );
};

export default FormAccount;
