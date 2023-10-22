import "./FormAccount.css";

import React, { useRef, useState } from "react";

const initialState = {
  title: "",
  price: 0,
  purchaseType: "",
  date: new Date().toISOString().split("T")[0],
  memoIs: "",
  repurchase: "no",
};

const FormAccount = ({ onCreate }) => {
  const [content, setContent] = useState(initialState);
  const [isMemoEnabled, setIsMemoEnabled] = useState(false);
  const memoCheckHandler = (e) => {
    setIsMemoEnabled(e.target.checked);
  };
  //메모기능의 활성화

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setContent((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onCreate(content);
    setContent(initialState);
  };
  // enter key로 submit보내기
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      onSubmit();
    }
  };

  return (
    <form className="FormAccount" onSubmit={onSubmit} onKeyDown={onKeyDown}>
      <div className="title_form">
        <label htmlFor="name">이름</label>
        <input
          id="name"
          name="title"
          value={content.title}
          onChange={handleInputChange}
        />
      </div>
      <div className="price_form">
        <label htmlFor="price">가격</label>
        <input
          id="price"
          name="price"
          value={content.price}
          onChange={handleInputChange}
          type="number"
          step="100"
        />
      </div>
      <div className="type_form">
        <label htmlFor="purchaseType">유형</label>
        <select
          id="purchaseType"
          name="purchaseType"
          value={content.purchaseType}
          onChange={handleInputChange}
        >
          <option>선택하세요</option>
          <option value="daily">생활용품</option>
          <option value="food">식비</option>
          <option value="edu">교육비</option>
          <option value="etc">기타</option>
        </select>
      </div>
      <div className="date_form">
        <label htmlFor="date">구입 날짜</label>
        <input
          id="date"
          name="date"
          value={content.date}
          type="date"
          onChange={handleInputChange}
        />
      </div>
      <div className="memo_form">
        <label htmlFor="memoCheck">메모</label>
        <input
          id="memoCheck"
          name="memoCheck"
          type="checkbox"
          checked={isMemoEnabled}
          onChange={memoCheckHandler}
        />
        {isMemoEnabled && (
          <input
            value={content.memoIs}
            name="memoIs"
            onChange={handleInputChange}
            placeholder=" "
          />
        )}
      </div>
      <div className="repurchase_form">
        <span>재구매 의사</span>
        <input
          name="repurchase"
          value="yes"
          checked={content.repurchase === "yes"}
          type="radio"
          id="yes"
          onChange={handleInputChange}
        />
        <label htmlFor="yes">한다</label>
        <input
          name="repurchase"
          value="no"
          checked={content.repurchase === "no"}
          type="radio"
          id="no"
          onChange={handleInputChange}
        />
        <label htmlFor="no">안한다</label>
      </div>
      <div className="btn-submit">
        <button onClick={onSubmit} type="submit">
          등록하기
        </button>
      </div>
    </form>
  );
};

export default FormAccount;
