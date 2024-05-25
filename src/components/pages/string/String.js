import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
    addSubstring,
    removeSubString,
    clear,
    selectString
} from "../../../slices/StringSlice";

export default function String() {
    const string = useSelector(selectString);
    const dispatch = useDispatch();
    const [substring_add, setAddSubstring] = useState('');
    const [substring_remove, setRemoveSubstring] = useState('');

    return (<div>
            <span>{string}</span>
            <button onClick={() => dispatch(clear())}>
                Clear
            </button>
            <input value={substring_add} onChange={e => setAddSubstring(e.target.value)}/>
            <button onClick={() => dispatch(addSubstring(substring_add))}>
                Add Substring
            </button>
            <input value={substring_remove} onChange={e => setRemoveSubstring(e.target.value)}/>
            <button onClick={() => dispatch(removeSubString(substring_remove))}>
                Remove Substring
            </button>
        </div>
    )
}