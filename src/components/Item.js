import React, { useState } from "react";
import { connect } from "react-redux";
import { DELETE_ITEM } from "../utils/todoSlice";

function Item({ id, text, onBtnClick }) {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  const checkboxId = `customCheckbox_${id}`;

  return (
    <li className="task wrapper">
      <input
        type="checkbox"
        id={checkboxId}
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <label for={checkboxId} class="customCheckboxLabel"></label>
      &nbsp;&nbsp;{text}&nbsp;&nbsp;
      <button onClick={() => onBtnClick(id)} className="taskBtn">
        삭제
      </button>
    </li>
  );
}

const mapStateToProps = (state) => ({
  items: state.items,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onBtnClick: () => dispatch(DELETE_ITEM(ownProps.id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
