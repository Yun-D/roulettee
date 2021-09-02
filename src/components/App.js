import React, { useState } from 'react';
import { connect } from 'react-redux';

import { ADD_ITEM } from '../store';
import Item from '../components/Item';

function App( {items, addItem} ) {
  const [text, setText] = useState("");

  function plusItem(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    addItem(text); //mapDispatchToProps의 addItem 부름
    setText("");
  }

  return (
    <>
      <h1>Roulettee!</h1>

      <form onSubmit = {onSubmit}> 
        <input type="text" value={text} onChange={plusItem}></input>
        &nbsp;
        <button> 추가 </button>
      </form>

      <ul>
        {items.map( item => (
          <Item {...item} key = {item.id} />
        ))}
      </ul>
    </>
  );
}

function mapStateToProps(state) { //state에서 items를 가져옴
  return { items: state }
}
function mapDispatchToProps(dispatch) {
  return {
      addItem: (text) => dispatch(ADD_ITEM(text)) //App Component에 있는 props인 addItem으로 dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
