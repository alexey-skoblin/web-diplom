"use client";
import styles from './Wrapper.module.scss';
import {selectIsOpenSidebar} from "@/slices/HeaderSlice";
import {useSelector} from "react-redux";

export default function Wrapper({children}) {
    const isOpenSidebar = useSelector(selectIsOpenSidebar);

    return (
        <div id={styles.main} className={`${styles.main} ${isOpenSidebar ? styles.withDisplayedSidebar : ''}`}>
            {children}
        </div>
    )
}