import React from "react";
import "./FilterAndSort.css";

const FilterAndSort = ({
  onTypeChange,
  selectedType,
  onSortChange,
  selectedSortOption,
  selectedStartDate,
  selectedEndDate,
  onApplyFilter,
}) => {
  return (
    <div className="FilterAndSort">
      <select
        value={selectedType}
        onChange={(e) => onTypeChange(e.target.value)}
      >
        <option value="">ALL</option>
        <option value="food">FOOD</option>
        <option value="edu">EDU</option>
        <option value="etc">ETC</option>
      </select>

      <select
        value={selectedSortOption}
        onChange={(e) => onSortChange(e.target.value)}
      >
        <option value="">정렬 없음</option>
        <option value="priceAsc">가격 낮은 순</option>
        <option value="priceDesc">가격 높은 순</option>
        <option value="dateAsc">날짜 오름차순</option>
        <option value="dateDesc">날짜 내림차순</option>
      </select>

      <input
        type="date"
        value={selectedStartDate}
        onChange={(e) => onApplyFilter(selectedStartDate, selectedEndDate)}
      />
      <input
        type="date"
        value={selectedEndDate}
        onChange={(e) => onApplyFilter(selectedStartDate, selectedEndDate)}
      />
    </div>
  );
};

export default FilterAndSort;
