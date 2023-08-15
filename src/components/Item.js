import React from "react";
import { connect, useDispatch } from "react-redux";
import { DELETE_ITEM } from "../utils/todoSlice";

function Item({ id, text, onBtnClick }) {
  const dispatch = useDispatch();

  return (
    <li>
      {text}&nbsp;&nbsp;
      <button onClick={() => onBtnClick(id)}> 삭제 </button>
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
