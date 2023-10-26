import React, { useRef, useState } from "react";
import "./FormAccount.css";

const initialState = {
  title: "",
  price: "",
  purchaseType: "",
  date: new Date().toISOString().split("T")[0],
  memoIs: "",
  repurchase: "yes",
};

const FormAccount = ({ onCreate, onKeyDown, applyFilters }) => {
  const [content, setContent] = useState(initialState);
  const titleInputRef = useRef();
  const priceInputRef = useRef();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setContent((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  const handleMemoCheck = (e) => {
    setContent((prevState) => ({
      ...prevState,
      isMemoEnabled: e.target.checked,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (content.title.trim() === "") {
      titleInputRef.current.focus();
      return;
    }

    if (content.price.trim() === "") {
      priceInputRef.current.focus();
      return;
    }

    onCreate(content);
    applyFilters();
    setContent(initialState);
  };

  return (
    <form className="FormAccount" onSubmit={onSubmit}>
      <div className="title_form">
        <label htmlFor="title">이름</label>
        <input
          type="text"
          id="title"
          name="title"
          value={content.title}
          onChange={handleInputChange}
          ref={titleInputRef}
        />
      </div>
      <div className="price_form">
        <label htmlFor="price">가격</label>
        <input
          type="number"
          id="price"
          name="price"
          value={content.price}
          onChange={handleInputChange}
          ref={priceInputRef}
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
          <option value="">SELECT</option>
          <option value="DAILY">DAILY</option>
          <option value="FOOD">FOOD</option>
          <option value="EDU">EDU</option>
          <option value="ETC">ETC...</option>
        </select>
      </div>
      <div className="date_form">
        <label htmlFor="date">구입 날짜</label>
        <input
          type="date"
          id="date"
          name="date"
          value={content.date}
          onChange={handleInputChange}
        />
      </div>
      <div className="memo_form">
        <label htmlFor="memoCheck">메모</label>
        <input
          type="checkbox"
          id="memoCheck"
          name="isMemoEnabled"
          checked={content.isMemoEnabled}
          onChange={handleMemoCheck}
        />
        {content.isMemoEnabled && (
          <input
            type="text"
            name="memoIs"
            value={content.memoIs}
            onChange={handleInputChange}
          />
        )}
      </div>
      <div className="repurchase_form">
        <span>재구매 의사</span>
        <input
          type="radio"
          id="yes"
          name="repurchase"
          value="yes"
          checked={content.repurchase === "yes"}
          onChange={handleInputChange}
        />
        <label htmlFor="yes">한다</label>
        <input
          type="radio"
          id="no"
          name="repurchase"
          value="no"
          checked={content.repurchase === "no"}
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
