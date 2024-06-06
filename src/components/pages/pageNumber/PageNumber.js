import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, selectNumber, setSize} from "@/slices/PageNumberSlice";
import React from "react";

export default function PageNumber() {
    const dispatch = useDispatch();
    const pageNumber = useSelector(selectNumber);
    const listSize = [6, 10, 16, 25];
    return (<div>
        <div>
            <button onClick={() => dispatch(decrement())}>Pred</button>
            <>{pageNumber + 1}</>
            <button onClick={() => dispatch(increment())}>Next</button>
        </div>
        <div>
            {Object.entries(listSize).map(([key, value]) => (
                <button key={key} onClick={() => {
                    dispatch(setSize(value))
                }}>{value}</button>))}
        </div>
    </div>);
}