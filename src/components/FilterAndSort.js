import React from "react";
import "./FilterAndSort.css";

const FilterAndSort = ({
  typeFilter,
  setTypeFilter,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  sortOrder,
  setSortOrder,
  applyFilters,
}) => {
  const handleInputChange = (e, setter) => {
    const value = e.target.valte;
    setter(value);
    applyFilters();
  };

  return (
    <div className="FilterAndSort">
      <select
        value={sortOrder}
        onChange={(e) => handleInputChange(e, setSortOrder)}
      >
        <option value="asc">오름차순</option>
        <option value="desc">내림차순</option>
      </select>
      <select
        value={typeFilter}
        onChange={(e) => handleInputChange(e, setTypeFilter)}
      >
        <option value="all">ALL</option>
        <option value="daily">DAILY</option>
        <option value="food">FOOD</option>
        <option value="edu">EDU</option>
        <option value="etc">ETC</option>
      </select>

      <label>시작 날짜:</label>
      <input
        type="date"
        value={startDate}
        onChange={(e) => handleInputChange(e, setStartDate)}
      />

      <label>종료 날짜:</label>
      <input
        type="date"
        value={endDate}
        onChange={(e) => handleInputChange(e, setEndDate)}
      />
    </div>
  );
};

export default FilterAndSort;
