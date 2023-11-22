import React, { useState } from "react";
import { connect } from "react-redux";
import { DELETE_ITEM } from "../utils/todoSlice";

import { ReactComponent as DeleteBtn } from "../Assets/trashcan.svg";

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
      <span className={`${checked ? "textChecked" : "taskText"}`}>{text}</span>
      <DeleteBtn onClick={() => onBtnClick(id)} width={20} height={20} />
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
