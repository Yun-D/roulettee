import React from "react";
import { connect } from "react-redux";
import { DELETE_ITEM } from "../utils/todoSlice";

function Item({ id, text, onBtnClick }) {
  return (
    <li className="task wrapper">
      {text}&nbsp;&nbsp;
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
