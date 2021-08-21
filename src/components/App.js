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
    ADD_ITEM(text);
    setText("");
  }

  return (
    <>
      <h1>Roulettee!</h1>

      <form onSubmit = {onSubmit}> 
        <input type="text" value={text} onChange={plusItem}></input>
        <button>추가</button>
      </form>

      <ul>
        {items.map( item => (
          <Item {...item} key = {item.id} />
        ))}
      </ul>
    </>
  );
}

function mapStateToProps(state) {
  return { items: state }
}
function mapDispatchToProps(dispatch) {
  return {
      addItem: (text) => dispatch(ADD_ITEM(text))
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
