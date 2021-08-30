import React from 'react';
import { connect } from 'react-redux';
import { DELETE_ITEM } from '../store';

function Item( {text, onBtnClick} ) {
    return (
        <li>
            {text}
            <button onClick = {onBtnClick}> 삭제 </button>
        </li>
    )
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onBtnClick: () => dispatch(DELETE_ITEM(ownProps.id))
    }
}

export default connect(null, mapDispatchToProps) (Item);