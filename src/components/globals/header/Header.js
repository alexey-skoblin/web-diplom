"use client";
import styles from './Header.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {selectIsOpenSidebar, setIsOpenSidebar} from "@/slices/HeaderSlice";
import {useState} from "react";

export default function Header() {
    const dispatch = useDispatch();
    const isOpenSidebar = useSelector(selectIsOpenSidebar);

    // const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header>
                <button className={styles.menuButton} onClick={() => dispatch(setIsOpenSidebar(!isOpenSidebar))}>☰
                </button>
                <h1>{isOpenSidebar ? 'Open Sidebar' : 'Close Sidebar'}</h1>
            </header>
            <div className={styles.separator}></div>
        </>
    )
}