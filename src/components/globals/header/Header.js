"use client";
// import styles from './Header.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {useNavigation} from "@/components/globals/Sites";
import {selectIsDisplayed, setIsDisplayed} from "@/slices/SidebarSlice";

export default function Header() {
    const dispatch = useDispatch();
    const sidebarIsDisplayed = useSelector(selectIsDisplayed);

    const {sites, isActivePath} = useNavigation();

    let pageTitle;
    Object.entries(sites).forEach(([key, value]) => {
        if (isActivePath(`/${value}`)) {
            pageTitle = key;
        }
    });

    return (
        <>
            <header>
                <button
                    // className={styles.menuButton}
                    onClick={() => dispatch(setIsDisplayed(!sidebarIsDisplayed))}
                >☰ {pageTitle}</button>
                <h1>{sidebarIsDisplayed ? 'Open Sidebar' : 'Close Sidebar'}</h1>
            </header>
            <div
                // className={styles.separator}
            ></div>
        </>
    )
}