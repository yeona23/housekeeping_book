// import AccountItem from "./AccountItem";
import "./ItemList.css";
import React from "react";

const ItemList = ({ book, onDelete, id }) => {
  const onClickDelete = (id) => {
    onDelete(id);
  };

  return (
    <>
      <div className="ItemList">
        {book.map((content) => (
          <div className="AccountItem" key={content.id}>
            <div>
              <div className="purchase_type">유형: {content.purchaseType}</div>
              <div className="title_item">제목: {content.title}</div>
              <div className="price_item">가격: {content.price}</div>
              <div className="memo_item">메모: {content.memoIs}</div>
              <div className="date_item">
                날짜: {content.date.toLocaleDateString()}
              </div>
              <div className="memo_item">
                재구매 여부: {content.repurchase ? "YES" : "NO"}
              </div>
            </div>
            <div className="btn-delete">
              <button onClick={() => onClickDelete(content.id)}>
                삭제하기
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ItemList;
