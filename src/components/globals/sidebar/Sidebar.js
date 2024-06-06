"use client";
// import styles from './Sidebar.module.scss';
import Link from 'next/link';
import {setIsOpenSidebar} from "@/slices/HeaderSlice";
import {useDispatch, useSelector} from "react-redux";
import {useNavigation} from "@/components/globals/Sites";
import {useEffect, useRef} from "react";
import {selectIsDisplayed} from "@/slices/SidebarSlice";

export default function Sidebar() {
    const dispatch = useDispatch();
    const isDisplayed = useSelector(selectIsDisplayed);
    const {sites, isActivePath} = useNavigation();
    const sidebarRef = useRef(null);
    useEffect(() => {
        const handleClickOutsideSidebar = (e) => {
            if (isDisplayed
                && sidebarRef.current
                && !sidebarRef.current.contains(e.target)) {
                dispatch(setIsOpenSidebar(!isDisplayed))
            }
        };
        document.addEventListener('click', handleClickOutsideSidebar);
        return () => {
            document.removeEventListener('click', handleClickOutsideSidebar);
        };
    }, [sidebarRef, isDisplayed]);

    return (
        <nav ref={sidebarRef}
            // id={styles.sidebar}
            // className={`${styles.sidebar} ${isDisplayed ? styles.displayed : ''}`}
        >
            <ul>
                {Object.entries(sites).map(([key, value]) => (
                    <li key={key}>
                        <Link href={`/${value}`}
                            // className={isActivePath(`/${value}`) ? styles.active : ''}
                        >{key}</Link>
                    </li>
                ))}
            </ul>
        </nav>

    );
};
