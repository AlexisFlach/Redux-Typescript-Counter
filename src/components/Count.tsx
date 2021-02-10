import React from 'react'
import {useDispatch} from 'react-redux';

import {actionCreators} from '../state';
import {ActionType} from '../state/action-types';


const Count:React.FC  = () => {
    const dispatch = useDispatch();


const handleClick = (e: React.MouseEvent) => {
    const target = (e.target as HTMLButtonElement).getAttribute('value');
    dispatch({type: target})
    
}
    return (
        <div>
        <button value={ActionType.INCREMENT} onClick={(e) => handleClick(e)}>Increment</button>
        <button value={ActionType.DECREMENT} onClick={(e) => handleClick(e)}>Decrement</button>
        </div>
    )
}

export default Count;
