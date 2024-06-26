import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, reset, selectNumber, selectSize, setSize} from "@/slices/PageNumberSlice";
import React, {useEffect} from "react";
import styles from "./PageNumber.module.scss";
import {usePathname} from "next/navigation";

export default function PageNumber() {
    const dispatch = useDispatch();
    const pageNumber = useSelector(selectNumber);
    const size = useSelector(selectSize);
    const currentPath = usePathname();
    const listSize = [6, 10, 16, 25];

    useEffect(() => {
        return () => {
            dispatch(reset()); // Сброс при размонтировании компонента
        };
    }, [dispatch, currentPath]);

    return (
        <div className={styles.container}>
            <div>
                <button onClick={() => dispatch(decrement())}>Pred</button>
                <button>{pageNumber + 1}</button>
                <button onClick={() => dispatch(increment())}>Next</button>
            </div>
            <div>
                {Object.entries(listSize).map(([key, value]) => (
                    <button key={key} onClick={() => {
                        dispatch(setSize(value))
                    }} className={value === size ? styles.active : ''}>{value}</button>))}
            </div>
        </div>
    );
}